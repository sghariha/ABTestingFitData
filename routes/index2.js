// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log("************************************************");
	console.log(data);
	res.render('index2');
};