function playCricket(){
    console.log('Try to Bat first!');
    console.log("And score 30 runs.");
}

playCricket();
var date = 14;
var place = "Abahoni field";
playCricket();
var practicePlace = "TNT Field";
playCricket();

// Function Return

function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(50);
var third = doubleIt(500);

var total = first + second + third;

console.log(first, second, third);
console.log("The total is : ", total);

// Function calling with multiple parameter

function add(num1, num2){
    var result = num1 + num2;
    return result;
}
total = add(15, 17);
console.log(total);