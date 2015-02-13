var DishSelectView = function (container,model) {

	

	var allDishes = container.find("#allDishes");



	var haha = model.getAllDishes('starter');

	this.getDishes = function()
	{ 
		var hehe = '';
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-3'><br />"
			hehe += "<center><img src=js/images/"+dish.image+' width=100%><br /><br/>';
			hehe += "<div id='foodhead'><h4><center>"+dish.name+"</center></h4></div>";
			hehe += "<p>"+dish.description.substr(0, 80)+'...</p></div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

}