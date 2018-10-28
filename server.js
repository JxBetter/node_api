var serverPort = process.env.PORT || 5000;
var bodyParser = require('body-parser'); 
var express = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });  

var d = {};

app.get('/', function (req, res) {

	res.send(JSON.stringify(d));
})


app.post('/', urlencodedParser, function (req, res) {
	d = req.body;
	res.send(JSON.stringify({'result': 1, 'success': true}));
})
 
var server = app.listen(serverPort)