var serverPort = process.env.PORT || 5000;
var bodyParser = require('body-parser'); 
var express = require('express');
var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

var d = {};

app.get('/', function (req, res) {

	res.json(d);
})


app.post('/', jsonParser, function (req, res) {
	d = req.body;
	res.send(JSON.stringify({'result': 1, 'success': true}));
})
 
var server = app.listen(serverPort)
