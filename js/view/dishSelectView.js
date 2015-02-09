var DishSelectView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var allDishes = container.find("#allDishes");



	var hehe = '';
	var haha = model.getAllDishes('dessert');

	this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-3'><h4>"
			hehe += "<center><img src=js/images/"+dish.image+' height="100px"></center><br/>';
			hehe += dish.name;
			hehe += "</h4>"
			hehe += "<p>"+dish.description+'</p></div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

}
 
