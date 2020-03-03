var friendsAge = [15, 16, 17, 18, 19, 20];
console.log(friendsAge[0])
var sonaliAge = friendsAge[3];
console.log(sonaliAge)
friendsAge[1] = 21;
console.log(friendsAge[1])
var position = friendsAge.indexOf(19);
console.log(position)
friendsAge.push(30, 31);
console.log(friendsAge.length);
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.splice();
console.log(friendsAge);

