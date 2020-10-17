var express = require("express");
var app = express();

app.get("/",(req, res) =>{
    res.send("Hey there! Welcome to my Assignment!");
    });

    app.get("/",(req, res) =>{
        res.send("Hey there! Welcome to my Assignment!");
        });


    app.get("/speak/pig",(req, res) =>{
        res.send("The pig says oing!");
        });
        
    app.get("/speak/cow",(req, res) =>{
        res.send("The cow says mouu!");
        });
    app.get("/speak/dog",(req, res) =>{
        res.send("The dog says woof!");
        });
        app.get("/repeat/:nm/:num",(req, res) =>{
            var name = req.params.hello
            var count = Number(req.params.num)
            var result = ""
            for (var i =0 ; i<=count;i++){
            result = result + name + " ";
            }

            res.send(result);
            });



            app.get("*",(req, res) =>{
                res.send("Sorry what r u doing with ur life?");
                });
    






        app.listen(3000, function() { 
            console.log('Server listening on port 3000'); 
          });
        