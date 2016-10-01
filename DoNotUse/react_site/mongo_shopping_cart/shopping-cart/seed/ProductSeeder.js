var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/test_shopping_cart');

var products = [
	new Product({
		imagePath: 'http://weknowyourdreams.com/images/beer/beer-04.jpg',
		title: 'Beer',
		description: 'Awesome beer!!!!',
		price: 10
	}),
	new Product({
		imagePath: 'http://insightmine.com/content/images/2015/04/Wine.jpg',
		title: 'Wine',
		description: 'Wine is pretty cool',
		price: 11
	}),
	new Product({
		imagePath: 'http://s3.amazonaws.com/liquor/wp-content/uploads/2014/07/Taaka-Vodka.jpg',
		title: 'Vodka',
		description: 'Awesome vodka!!!!',
		price: 12
	}),
	new Product({
		imagePath: 'http://www.lcbo.com/content/dam/lcbo/products/451195.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
		title: 'Tequila',
		description: 'Uhhhhhh',
		price: 13
	}),
	new Product({
		imagePath: 'http://lakesdistillery.com/media/images/productimage-picture-the-lakes-gin-70cl-47.jpg',
		title: 'Gin',
		description: 'Gin',
		price: 14
	}),
	new Product({
		imagePath: 'http://uncrate.com/p/2013/07/bulleit-bourbon-10-year-xl.jpg',
		title: 'Bourbon',
		description: 'Awesome bourbon!!!!',
		price: 15
	})
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		};
	});
};

function exit(){
	mongoose.disconnect();
};