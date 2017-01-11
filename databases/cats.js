var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/");

//it tells java to add cats to the js and cats to be defined by  this
// it is defining a pattern for data
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// We took the catSchema which is just a pattern
// and we compiled it into a model and we save it in a variable Cat
// Now we can use the cat Variable with capital C, WE CAN now Cat.find(), Cat.remove()etc
var Cat = mongoose.model("Cat". catSchema);

//adding a cat to the DB
var george = new Cat({
  name: "George",
  age: 11,
  temperament: "Grouchy"
});

// once we save it will be save in the database
// include a callback function in the save because something database shuts down with internet orobs and someother etc
george.save(function(err, cat) {
  if(err){
    console.log("SOMETHING WENT WRONG")
  }else{
    console.log("We just saved a cat to the DB")
    console.log(cat);
  }
});


//retreive all cats from DB and console log in each
