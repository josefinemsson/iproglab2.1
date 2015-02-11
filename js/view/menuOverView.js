var MenuOverView = function (container,model) {



	var sub = container.find("#sub");
	var food= container.find("#foodOverview")


	var print = '';
	print += '<br /><h2>My Dinner: '+model.getNumberOfGuests()+' people</h2><span id=back-button><input class="btn btn-lg" type="submit" value="Go back and edit dinner"></span>'
	sub.html(print);




	var print2 ='';
	var chosenDishes = model.getFullMenu();
	var menu=[];
	if('starter' in chosenDishes){
		menu.push(model.getSelectedDish('starter'));
	}

	if('main' in chosenDishes){
		menu.push(model.getSelectedDish('main'));
	}

	if('dessert' in chosenDishes){
		menu.push(model.getSelectedDish('dessert'));
	}


	print2 += '<div class="col-md-3"></div>';

	this.getDishes = function(){

		for(k=0;k<menu.length;k++){
			var dish = menu[k];
			var price = model.getDishPrice(dish.id);

			print2 += "<div class='col-md-2'><br />"
			print2 += "<img src=js/images/"+dish.image+' width=100%><br /><br/>';
			print2 += "<div id='foodhead'><h3><center>"+dish.name+"</center></h3></div>";
			print2 += "<h3><center>"+price+' SEK</center></h3></div>'
		}

		return print2
	}

	this.getDishes()


	print2 += '</div><div class="row"><div class="col-md-12"><center><br /><br /><h2>Total price: '
	print2 += model.getTotalMenuPrice() + ' SEK<br />';
	print2 += '<br /><span id=print-button><input class="btn btn-lg" type="submit" value="Print Full Recipes"></span></center></div></div>';

	food.html(print2);
 }
 
