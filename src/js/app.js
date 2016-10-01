// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(
	<App />,
	document.getElementById('app')
)