var express = require('express'); // the express folder is inside the node modules folder
var app = express();

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var path = require("path");

app.use(express.static("public"));

app.get('/post-form', function(req, res){
	res.sendFile(path.join(__dirname, "public/post-form.html"));
});
app.post('/take-in-post-info', function(req, res){
	//req.params
	//req.query
	// res.send(req.body);
	console.log(req.body);

	res.redirect('/post-form');
});

app.get('/index', function(req, res){
	res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get('/quiz', function(req, res){
	res.sendFile(path.join(__dirname, "/app/public/quiz.html"));
});


app.get('/_username', function(req, res) {
	res.json(req.query);
});

app.get('/question1', function(req, res) {
	res.json(req.query);
});

app.get('/question2', function(req, res) {
	res.json(req.query);
});

app.get('/question3', function(req, res) {
	res.json(req.query);
});

app.get('/question4', function(req, res) {
	res.json(req.query);
});

app.get('/question5', function(req, res) {
	res.json(req.query);
});

app.get('/question6', function(req, res) {
	res.json(req.query);
});

app.get('/question7', function(req, res) {
	res.json(req.query);
});

app.get('/question8', function(req, res) {
	res.json(req.query);
});

app.get('/question9', function(req, res) {
	res.json(req.query);
});

app.get('/question10', function(req, res) {
	res.json(req.query);
});
 
app.listen(3000, function() {
        console.log('listening on port 3000 for friend finder');
});

// when updating code will need to restart the server to make the 
// changes effective. 