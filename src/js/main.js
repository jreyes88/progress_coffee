var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var appAPI = require('./utils/AppAPI.js');

var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');

// Load Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

React.render(
	<App />,
	document.getElementById('app')
);