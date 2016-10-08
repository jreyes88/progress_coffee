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

// mailgun-js
// ==========================
var api_key = '9aa901584ed038281ce6ba19d4a4547c';
var domain = 'app456a6dde74b149f4a864111465b2ccd6.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var toWho = 'jreyes88@gmail.com';

var data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'serobnic@mail.ru',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

// Routes
// ==========================
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

app.get('/submit/:mail', function(req,res) {
	console.log(req);

    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: req.params.mail,

    //The email to contact
      to: toWho,
    //Subject and text data  
      subject: 'Hello from Mailgun',
      html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.mail + '">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.render('submitted', { email : req.params.mail });
            console.log(body);
        }
    });

});

// Server listener
// ==========================
app.listen(process.env.PORT || 3000);
console.log("Listening on PORT: " + PORT);