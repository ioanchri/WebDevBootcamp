var express =require("express");

var app = express();

// "/" => 'Hi
app.get("/",(req, res) =>{
res.send("hi Thereeeee");
});

app.get("/bye",function(req,res){
    res.send("See ya!")
});

app.get("/r/:subreddit",(req,res) =>{
    console.log(req.params);
var subName = req.params.subreddit;
    res.send("welcome to the " + subName + " section!")
});



app.get("*",(req ,res) =>{
res.send("Nothing to see here get away")
});




app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });
