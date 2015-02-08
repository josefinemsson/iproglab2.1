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
	this.allDishes = container.find("#allDishes");
	
	this.numberOfGuests.html(model.getNumberOfGuests);
	this.totalCost.html(model.getNumberOfGuests);
	this.dishName.html(model.getSelectedDish);
	this.dishPrice.html(model.getDishPrice);


	var nameDish= model.getAllDishes('main dish').name//Den här måste skrivas som en for-loop då det kommer plockas ut många namn
//Vi måste sedan göra detsamam för image samt för beskrivning av maträtten
	this.allDishes.html(nameDish);
}
 
