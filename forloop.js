console.log("while loop")
var i = 0;
while(i<=10){
    console.log(i);
    i++;
}
console.log("For loop")
for(var i=0; i<=10; i++){
    console.log(i);
} 
console.log("For loop array")
var nums = [55, 66, 77, 88, 99];

for(var i=0; i<nums.length; i++){
    var element = nums[i];
    console.log(element);
}