// Server Dependences
// ==========================
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create instance of Express
// ==========================
var app = express();
var PORT = process.env.PORT || 3000;

// Use Morgan for logging
// ==========================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Serve static content for the app from the 'public' directory
// ==========================
app.use(express.static(process.cwd() + '/public'));

// Routes
// ==========================
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

// Server listener
// ==========================
app.listen(process.env.PORT || 3000);
console.log("Listening on PORT: " + PORT);