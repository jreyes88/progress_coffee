var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Product = require('../models/product');

// var csrfProtection = csrf();
// router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, docs){
		var productChunks = [];
		var chunkSize = 3;

		for (var i = 0; i < docs.length; i += chunkSize) {
			productChunks.push(docs.slice(i, i + chunkSize));
		}
		res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
	});
	
});

router.get('/user/signup', function(req, res, next){
	res.render('user/signup', {csrfToken: req.csrfToken()});
});

// this route will redirect
router.post('/user/signup', function(req, res, next){
	res.redirect('/user/profile');
});

// this route does not work at all and breaks everything
// router.post('/user/signup', passport.authenticate('local.signup',
// 	{
// 		successRedirect: '/user/profile',
// 		failureRedirect: '/user/signup',
// 		failureFlash: true
// 	}
// ));

router.get('/user/profile', function(req, res, next){
	res.render('user/profile');
});

router.get('/add-to-cart/:id', function(req, res, next){
	console.log(req.params);
	var productID = req.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {items:{}});

	Product.findById(productId, function(err, product){
		if(err){
			console.log(err);
			return res.redirect('/');
		} else {
			cart.add(product, product.id);
			req.session.cart = cart;
			console.log(req.session.cart);
			req.redirect('/');
		}
	});
});

module.exports = router;
