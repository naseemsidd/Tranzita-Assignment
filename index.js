var express = require('express');
var app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://naseem:naseem123@cluster0.iq1il.mongodb.net/naseem?retryWrites=true&w=majority",{
   useNewUrlParser: true
},
 function(error){
    if(error){
       console.log(error);
    }
    else{
       console.log("Connected to the Database");
    }
});

app.get('/', function(req, res){
   res.sendFile("index.html",{root:__dirname});
});
app.post('/save-feedback',function(req,res){
   dbConn.then(function(db){
      delete req.body._id;
      db.collection('details').insertOne(req.body);
   });
   res.send("Data recieved:\n" + JSON.stringify(req.body));
});

app.get('/', function(req, res){
   res.send("Hello world!");
});


// app.listen(3000);
app.listen(process.env.PORT);
