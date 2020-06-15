var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var route = require('./route/rt_student');
var connection = require('./connection/connection');

//set environment for application
app.set('views', __dirname + '/views');
app.set('view engine','twig');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Application routing
app.use('/', route);

app.listen(5000, function() {
   console.log("Application listening at port number:"+5000); 
});