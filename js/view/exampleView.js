//ExampleView Object constructor
var ExampleView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalCost = container.find("#totalCost");
	this.dishName = container.find("#dishName");
	this.dishPrice = container.find("#dishPrice");

	this.numberOfGuests.html(model.getNumberOfGuests);
	this.totalCost.html(model.getNumberOfGuests);
	this.dishName.html(model.addDishToMenu(100));
	this.dishPrice.html(model.getDishPrice);


}
 
