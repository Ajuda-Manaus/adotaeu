var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var neo4j = require("neo4j-driver").v1;
var app = express();

// View  Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'Destinotudo1'));
var session = driver.session();

app.get('/', function(req, res){
	session
		.run( "Create (n:User) RETURN n" )
		.then(function(result){
			result.records.forEach(function(record){
				console.log(record);
			});
		})
		.catch(function(err){
			console.log(err);
		});
	res.send('Mudança.');
})


app.listen(3000);
console.log('Servidor iniciado em porta 3000');

module.exports = app;