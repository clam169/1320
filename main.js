let readlineSync = require("readline-sync");
let labThree = require("./lab-three.js");

console.log("Here is the calendar for 2020: ");
labThree.makeCalendar();

console.log("Now, enter a date and day of the week will be returned.");
let iyear = parseInt(readlineSync.question("Please give me a year (YYYY):\n "));
let imonth = parseInt(readlineSync.question("Please give me a month (MM):\n "));
let idate = parseInt(readlineSync.question("Please give me a day (DD):\n "));

var weekday = labThree.getDayOfTheWeek(iyear, imonth, idate);
console.log("The date you have entered is a: " + weekday);
