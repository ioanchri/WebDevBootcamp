var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });

  var campgrounds = [
    {name:"Olympos", image:"https://www.kathimerini.gr//resources/2019-10/olympusmount_ocharami-89.jpg"},
    {name:"Neda", image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Nedariversp%21ros.jpg"},
    {name:"Taigetos", image:"https://www.indiou.com/wp-content/uploads/2019/02/P1120065-1024x768.jpg"}
]

app.get("/",(req,res) =>{
res.render("landing")
  })

app.get("/campgrounds",(req,res) =>{

res.render("campgrounds", {campgrounds:campgrounds});
      }) 


app.post("/campgrounds",(req,res) =>{
//get data from form and add to campground array
var name = req.body.name;
var image = req.body.image;
var newCampground = {name:name, image:image}
campgrounds.push(newCampground);
res.redirect("/campgrounds")

});

app.get("/campgrounds/new",(req,res) =>{
res.render("new.ejs")
} )