var student1 = { id: 121, phone: 1234, name: "Abir"};
var student2 = { id: 131, phone: 1324, name: "Mahi"};
// Updated phone number Mahi
student2.phone = 5433456;

var phoneNo = student1.phone;
var phoneNum = student2["phone"];

console.log(student1);
console.log(student2);
console.log(phoneNo);
console.log(phoneNum);