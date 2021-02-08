var express = require('express');
var app = express();
const port = 3000;
app.get('/', function(req, res){
   res.send("Hello world!");
});

// app.listen(3000);
app.listen(process.env.PORT);
