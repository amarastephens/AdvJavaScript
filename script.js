//hoisting
name = "Amara";
var name;
console.log(name);


setName();
function setName() {
    var name = 'Amara';
    console.log(name);
}

console.log('1');
let avg = findAvg(2, 2);
console.log('2', avg);
function findAvg(a, b) {
    console.log('3');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ["apple", "tomato", "banana"];


function printFruits() {
console.log(fruits[0])
let favFruit = fruits[2]

function printFavFruit () {
    console.log(favFruit)
    let leastFav = fruits [1]
    console.log(leastFav)
}

printFavFruit (); 

}
printFruits(); 


nameFunc (); 
function nameFunc () {
    console.log("Hello, Amara")
}



let alertFunc = function () {
    alert("This is an alert!")
}
alertFunc ()
