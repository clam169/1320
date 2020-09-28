var readlineSync = require("readline-sync");
const labThree = require("./lab-three.js");

var yy = readlineSync.question("Please give me a year: ");
var mm = readlineSync.question("Please give me a month: ");
var dd = readlineSync.question("Please give me a day: ");

console.log(yy);
console.log(mm);
console.log(dd);

console.log(labThree.getDayOfTheWeek(yy, mm, dd));

var weekday = labThree.getDayOfTheWeek(yy, mm, dd);
console.log(weekday);

var weekday1 = labThree.getDayOfTheWeek(2020, 9, 27)
console.log(weekday1);
