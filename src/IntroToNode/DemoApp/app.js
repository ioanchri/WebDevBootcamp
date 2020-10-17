// const catMe = require("cat-me");
// var test = require("cat-me");

// console.log(test());

// var knock = require('knock-knock-jokes')

// console.log(knock());

var faker = require('faker');


for ( var i = 0; i < 10; i++){
var randomName = faker.commerce.productName();
var randomPrice = faker.commerce.price();

console.log("The name is " + randomName + " and the price is " + randomPrice + " Dollars");
}
