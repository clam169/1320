const readlineSync = require("readline-sync");
const { isLeapYear } = require("./lab-three.js");
const labThree = require("./lab-three.js");

console.log("Here is the calendar for 2020: ");
labThree.makeCalendar();

console.log("Now, enter a date and day of the week will be returned.");

function getDayOfTheWeekForUserDate(){
    let inputYear = readlineSync.questionInt("Please give me a year (YYYY):\n ");
    let inputMonth = readlineSync.questionInt("Please give me a month (MM):\n ");
    if (inputMonth < 1 || inputMonth > 12){
        do {
            inputMonth = readlineSync.questionInt("Please enter a valid month (MM):\n ");
        } while (inputMonth < 1 || inputMonth > 12);
    }
    let inputDay = readlineSync.questionInt("Please give me a day (DD):\n ");
    let month_days = [1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (inputDay < 1 || inputDay > month_days[inputMonth]){
        do {
            inputDay = readlineSync.questionInt("Please enter a valid day (DD):\n ");
        } while (inputDay < 1 || inputDay > month_days[inputMonth]);
    }      
    if (inputMonth == 2 && isLeapYear(inputYear) == false){
        do {
            inputDay = readlineSync.questionInt("Please enter a valid day (DD):\n ");
        } while (inputDay < 1 || inputDay > 28);
    }
    weekday = labThree.getDayOfTheWeek(inputYear, inputMonth, inputDay);
    console.log("The date you have entered is a: " + weekday);
}

getDayOfTheWeekForUserDate();
