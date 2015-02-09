var SingleDishView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var leftField = container.find("#left");


	var food = model.getDish(100);


	var print ='';
	print += '<h2>'+food.name+'</h2><br/>';
	print += "<img src=js/images/"+food.image+'><br/><br />';
	print += '<p>'+food.description+'</p>';
	leftField.html(print);



	var rightField = container.find("#right");
	var print2 = '';
	var numbGuest = model.getNumberOfGuests();
	print2 += '<h3>Ingredients for '+numbGuest+' person(s).</h3>';
	print2 += '<div class="col-md-1>hgwvhgvehgdvqwh</div>';
	rightField.html(print2);

 }
 
