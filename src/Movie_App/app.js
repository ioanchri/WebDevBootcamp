var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });


//   http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
// http://www.omdbapi.com/?s=${query}&apikey=thewdb
// "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
app.get("/",(req, res) =>{
    res.render("search")
})




  app.get("/results",(req,res) =>{
    var query = req.query.search;
    request("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb",function(error,response,body){
    if(!error && response.statusCode == 200){
        var results =JSON.parse(body)
        res.render("results",{results:results, query:query });
    }
})

  })