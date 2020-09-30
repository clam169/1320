const readlineSync = require("readline-sync");
const labThree = require("./lab-three.js");

console.log("Here is the calendar for 2020: ");
labThree.makeCalendar();

console.log("Now, enter a date and day of the week will be returned.");
let inputYear = readlineSync.questionInt("Please give me a year (YYYY):\n ");
let inputMonth = readlineSync.questionInt("Please give me a month (MM):\n ");
let inputDate = readlineSync.questionInt("Please give me a day (DD):\n ");

var weekday = labThree.getDayOfTheWeek(inputYear, inputMonth, inputDate);

    if (weekday == undefined){
    console.log("Please enter a valid date.");
        } else 
            console.log("The date you have entered is a: " + weekday);

