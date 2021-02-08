var express = require('express');
var app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://naseem:naseem123@cluster0.iq1il.mongodb.net/naseem?retryWrites=true&w=majority",{
   useNewUrlParser: true
}, function(error){
    if(error){
       console.log(error);
    }
    else{
       console.log("Connected to the Database");
    }
});

app.get('/', function(req, res){
   res.sendFile("index.html");
});

<<<<<<< HEAD
// app.get('/', function(req, res){
//    res.send("Hello world!");
// });
=======
app.get('/',function(req,res){
res.sendFile(details.html);

});
>>>>>>> 0262abee04bcf2839e168b8dae37de9e69b787ca

// app.listen(3000);
app.listen(process.env.PORT);
