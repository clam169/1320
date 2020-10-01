function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
}
 
function getDayOfTheWeek(year, month, day) {
    //Calculating month code
    let monthCode;
    if (month == 4 || month == 7) {
        monthCode = 0;
    } else if (month == 1 || month == 10) {
        monthCode = 1;
    } else if (month == 5) {   
        monthCode = 2;
    } else if (month == 8) {
        monthCode = 3;
    } else if (month == 2 || month == 3 || month == 11) {
        monthCode = 4;
    } else if (month == 6) {
        monthCode = 5;
    } else if (month == 9 || month == 12) {
        monthCode = 6;
    } else  {
        console.log("Month entered is invalid.");
    }

    //Calculating special scenarios
    if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 6) {
            monthCode = (monthCode + 6);
    } else if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 7) {
            monthCode = (monthCode + 4);
    } else if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 8) {
            monthCode = (monthCode + 2);
    } else if (String(year).length == 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 0) {
            monthCode = (monthCode + 6);
    } else if (String(year).length == 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 1) {
            monthCode = (monthCode + 4);
    } 

    if (isLeapYear(year) == true && (month === 1 || month === 2)) {
        monthCode = (monthCode - 1);
    }

    //calculating the day of the week
    let step1 = (Math.floor((year % 100) / 12));
    let step2 = ((year % 100) % 12);
    let step3 = (Math.floor(step2 / 4));
    let dayOfTheWeekCode = ((step1 + step2 + step3 + day + monthCode) % 7);
    let dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let dayOfWeekValue = dayOfTheWeek[dayOfTheWeekCode];
    return dayOfWeekValue;
}

function makeCalendar() {
    let year = 2020;
    let monthDays = [1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 1; i < 13; i++) {
        for (let j = 1; j <= monthDays[i]; j++) {
            let dayOfWeek = getDayOfTheWeek(year, i, j);
            console.log(i + "-" + j + "-" + year + " is a " + dayOfWeek);
        }
    }
}

module.exports = {
   getDayOfTheWeek, makeCalendar, isLeapYear
}
