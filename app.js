var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

var campgrounds = [
  {name: "Salmon Creek", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
  {name: "Granite Hill", image: "https://savannahwaydrive.files.wordpress.com/2012/11/northern-territory-camping.jpg"},
  {name: "Mountain Goat's Rest", image: "http://media.mnn.com/assets/images/2015/09/tents-at-night-3.jpg.838x0_q80.jpg"},
  {name: "Salmon Creek", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
  {name: "Salmon Creek", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
  {name: "Granite Hill", image: "https://savannahwaydrive.files.wordpress.com/2012/11/northern-territory-camping.jpg"},
  {name: "Mountain Goat's Rest", image: "http://media.mnn.com/assets/images/2015/09/tents-at-night-3.jpg.838x0_q80.jpg"},
  {name: "Salmon Creek", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"}

]

// LANDING PAGE

app.get("/", function(req, res) {
  res.render("landing");
});

// camp ground routes

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

//post method

app.post("/campgrounds", function(req, res) {
  //get data from forma and add to campground array
  //you can request a data from a form by foll command
  var name = req.body.name
  var image = req.body.image
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  // redirect to camp ground page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});
 // tell express to listen for requests, we use this command

app.listen(3000, function() {
  console.log('YELP CAMP SERVER HAS STARTED');
});
