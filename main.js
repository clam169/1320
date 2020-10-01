const questionInt = require("readline-sync").questionInt;
const { makeCalendar, getDayOfTheWeek, isLeapYear } = require("./lab-three.js");

function getDayOfTheWeekForUserDate() {
    let inputYear = questionInt("Please give me a year (YYYY):\n ");
    if (inputYear < 0) {
        inputYear = questionInt("Please enter a valid year (YYYY):\n ");
    }
    let inputMonth = questionInt("Please give me a month (MM):\n ");
    if (inputMonth < 1 || inputMonth > 12) {
        do {
            inputMonth = questionInt("Please enter a valid month (MM):\n ");
        } while (inputMonth < 1 || inputMonth > 12);
    }
    let inputDay = questionInt("Please give me a day (DD):\n ");
    let monthDays = [1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (inputDay < 1 || inputDay > monthDays[inputMonth]) {
        do {
            inputDay = questionInt("Please enter a valid day (DD):\n ");
        } while (inputDay < 1 || inputDay > monthDays[inputMonth]);
    }      
    if (inputMonth == 2 && isLeapYear(inputYear) == false) {
        do {
            inputDay = questionInt("Please enter a valid day (DD):\n ");
        } while (inputDay < 1 || inputDay > 28);
    }
    weekday = getDayOfTheWeek(inputYear, inputMonth, inputDay);
    console.log(inputYear + "-" + inputMonth + "-" + inputDay + " is a " + weekday);
}

console.log("Here is the calendar for 2020: ");
makeCalendar();

console.log("Now, enter a date and day of the week will be returned.");
getDayOfTheWeekForUserDate();
