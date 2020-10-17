var express = require("express");
var app = express();
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });


  app.get('/', (req,res) =>{
      res.render("home.ejs");
    })

    app.get('/posts', (req,res) =>{
        var posts = [
            {title: "post 1", author: "Susy"},
            {title: "post 2", author: "Bam"},
            {title: "post 3", author: "Tom"}
        ]
        res.render("posts.ejs", {posts:posts})
      })



app.get("/bestrapper/:who", function(req,res){
    var rapper = req.params.who;
    res.render("like.ejs",{rapperVar: rapper})
    
});

  


