var User = require('../models/user');

var mongoose = require('mongoose');

var users = [
	new User({
		email: 'test1@test.com',
		password: 'test1'
	}),
	new User({
		email: 'test2@test.com',
		password: 'test2'
	}),
	new User({
		email: 'test3@test.com',
		password: 'test3'
	}),
	new User({
		email: 'test4@test.com',
		password: 'test4'
	}),
	new User({
		email: 'test5@test.com',
		password: 'test5'
	}),
	new User({
		email: 'test6@test.com',
		password: 'test6'
	})
];

var done = 0;
for (var i = 0; i < users.length; i++){
	users[i].save(function(err, result){
		done++;
		if (done === users.length){
			exit();
		};
	});
};

function exit(){
	mongoose.disconnect();
};