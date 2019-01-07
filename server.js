var serverPort = process.env.PORT || 5000;
var bodyParser = require('body-parser'); 
var express = require('express');
var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

var d = {};

app.get('/', function (req, res) {

	res.sendfile("./a.html");
})


app.post('/', jsonParser, function (req, res) {
	d = req.body;
	res.send(JSON.stringify({'result': 1, 'success': true}));
})


app.get('/user', function (req, res){

	res.send(JSON.stringify({'data': ['john', 'tom']}));
})

app.post('find', jsonParser, function (req, res){
	
	res.send(JSON.stringify(req.body));
})


app.post('/ajax', urlencodedParser, function (req, res) {
	console.log(req.body);
	res.setHeader('Access-Control-Allow-Origin', 'null');
	res.json(d);
})


app.post('/refresh', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', 'null');
	d = {};
	res.json({success: true});
}) 
var server = app.listen(serverPort)
