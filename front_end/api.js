//installing express module
//npm install express in terminal 
var express = require('express');

//creating instance of express server
var app = express(); 

//importing api routes from module
var api_routes = require('./api_routes_dev.js'); 
app.use('/api', api_routes);


//static files 
app.use(express.static(__dirname));

//using the imported routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dev_html.html');
});

//link: http://localhost:3000
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

