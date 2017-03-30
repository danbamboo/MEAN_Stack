var express = require('express');
var app = express();

var port = process.env.PORT; //Use for could9 autoassign port

app.get('/', function(req, res){
   res.send("Killin it."); 
});

app.get('/mochi', function(req, res){
   res.send("Lovvin it."); 
});

app.listen(port, function(err){
    console.log("The server is running on port: " + port);
});

