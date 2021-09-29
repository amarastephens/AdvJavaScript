//hoisting
name = "Amara";
var name;
console.log(name);

setName();
function setName() {
    var name = 'Amara';
    console.log(name);
}


console.log('Hello World1');
let avg = findAvg(2, 2);
console.log('Hello World2', avg);
function findAvg(a, b) {
    console.log('Hello World3');
    var answer = (a + b) / 2;
    return answer;
}

//scoping

let fruits = ["apple", "tomato", "banana"];
let favFruit;

function printFruit() {
    let favFruit = fruits[2]
    console.log(fruits[0])


    function pickFavFruit() {
        let leastFav = fruits[1]
        console.log(favFruit)

    }

}

printFruit();
pickFavFruit();
console.log(leastFav)


nameFunc (); 

function nameFunc () {
    console.log("Hello, Amara")
}



let alertFunc = function () {
    alert("This is an alert!")
}
alertFunc ()

