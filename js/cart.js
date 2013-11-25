/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {
	var model = createListModel(config);
	//model's getTotakPrice method returns the total price
	//from all the accumulated items in the cart to 2 decimal place
	model.getTotalPrice = function() {
		var idx;
		var totalPrice = 0;
		for (idx = 0; idx < this.items.length; ++idx) {
    		totalPrice += this.items[idx].price;
		}
		return totalPrice.toFixed(2);  
	}; //getTotalPrice()

	//FInd the amount of money that is being added on in taxes to the meal
	model.getTaxAmount = function() {
		var idx;
		var taxAmount = 0;
		for (idx = 0; idx < this.items.length; ++idx) {
    		taxAmount += this.items[idx].price;
		}
		return taxAmount.toFixed(2);  
	}; //getTotalPrice()

	//Create for loop to get Grand Total Price and add the value
	model.getGrandTotal = function() {
		var idx;
		var grandTotal = 0;
		for (idx = 0; idx < this.items.length; ++idx) {
    		grandTotal += this.items[idx].price;

		}
		//Take the Grandtotal and multiply it by the tax and then re-add the tax
		var n = grandTotal * .095;
		grandTotal = n + grandTotal;
		if(grandTotal < 20.00) {
			alert("Your total is below $20.00");
		}

		return grandTotal.toFixed(2);  
		
	}; //getTotalPrice()

	//model's toJSON method returns a JSON representation
	//of all the items in the cart.
	model.toJSON = function() {
		return JSON.stringify(this.items);
		// body...
	}

	return model;

} //createCartModel()