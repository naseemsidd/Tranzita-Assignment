var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

var nameSchema = new mongoose.Schema({
   firstName: String,
   lastName: String
  });
  var User = mongoose.model("User", nameSchema);

  app.get('/', function(req, res){
   res.sendFile("index.html",{root:__dirname});
});

app.post("/addname", (req, res) => {
   var myData = new User(req.body);
   myData.save()
   .then(item => {
   res.send("item saved to database");
   })
   .catch(err => {
   res.status(400).send("unable to save to database");
   });
  });


app.get('/', function(req, res){
   res.send("Hello world!");
});


// app.listen(3000);
app.listen(process.env.PORT);
