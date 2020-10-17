const express = require("express");
const app = express();
const request = require("request");
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: true}));

const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost:27017/Yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.set("view engine", "ejs");

app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });


let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name:"Olympos", image:"https://www.kathimerini.gr//resources/2019-10/olympusmount_ocharami-89.jpg",
//   name:"Neda", image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Nedariversp%21ros.jpg"
// },function(err,campground){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(campground);
//   }
// })



//   var campgrounds = [
//     {name:"Olympos", image:"https://www.kathimerini.gr//resources/2019-10/olympusmount_ocharami-89.jpg"},
//     {name:"Neda", image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Nedariversp%21ros.jpg"},
//     {name:"Taigetos", image:"https://www.indiou.com/wp-content/uploads/2019/02/P1120065-1024x768.jpg"}
// ]

app.get("/",(req,res) =>{
res.render("landing")
  })

app.get("/campgrounds",(req,res) =>{
Campground.find({},function(err,allCampgrounds){
  if (err){
    console.log("error")
  } else{
    res.render("campgrounds", {campgrounds:allCampgrounds});
  }
  });
}) 


app.post("/campgrounds",(req,res) =>{
//get data from form and add to campground array
var name = req.body.name;
var image = req.body.image;
var newCampground = {name:name, image:image}
//create new camp and save to db
Campground.create(newCampground, function(err,newlyCreated){
  if(err){
    console.log("error")
  }else{
    //go back to campgrounds
    
    res.redirect("/campgrounds")

  }
});

});

app.get("/campgrounds/new",(req,res) =>{
res.render("new.ejs")
} )