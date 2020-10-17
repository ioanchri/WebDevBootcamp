const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost:27017/catApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

const Cat = mongoose.model("Cat", catSchema);


const Lilly = new Cat({
    name: "Lilly",
    age: 26,
    color: "red"
});

// Petros.save(function(err, cat){
//   if(err){
//     console.log("Something went wrong")
//   }else{
// console.log(Petros)
//   }
// });


// Cat.find({}),function(err, cats){
//   if(err){
//     console.log("error")
//   }else{
//     console.log(cats)
//   }
//   }

  