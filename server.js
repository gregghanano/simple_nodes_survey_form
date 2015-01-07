var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname +"/static"));

app.get('/', function (request, response){
	response.render('index');
})

// app.get('/result', function (request, response){
// 	//hard-coded user data
// 	response.render('result');
// });
app.post('/result', function (req, res){
	console.log("POST DATA \n\n", req.body);
	res.render('result', req.body);
});

app.listen(7777, function(){
	console.log("Listening on port 7777");
});