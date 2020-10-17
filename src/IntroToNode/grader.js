function average (scores){
//add scores
var total = 0;
scores.forEach(score => {
    total = total + score; 
});
var avg = total/scores.length;

return Math.round(avg);
}

var scores = [5,10,15,18,17,20]
console.log(average(scores));

var scores2 = [7,11,16,11,19,22]
