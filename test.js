function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}
 
function getDayOfTheWeek(year, month, day) {
    var monthcode;
    if (month == 4 || month == 7){
        monthcode = 0;
    } else if (month == 1 || month == 10){
        monthcode = 1;
    } else if (month == 5){   
        monthcode = 2;
    } else if (month == 8){
        monthcode = 3;
    } else if (month == 2 || month == 3 || month == 11){
        monthcode = 4;
    } else if (month == 6){
        monthcode = 5;
    } else {
        monthcode = 6;
    }

    //calculating special scenarios//
    if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 6){
            monthcode = (monthcode + 6);
    } else if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 7){
            monthcode = (monthcode + 4);
    } else if (String(year).length == 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 8){
            monthcode = (monthcode + 2);
    } else if (String(year).length == 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 0){
            monthcode = (monthcode + 6);
    } else if (String(year).length == 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 1){
            monthcode = (monthcode + 4);
    } if (isLeapYear(year) == true && month == 1 || month == 2){
            monthcode = (monthcode - 1);
    }
 
    //calculating the day of the week//
    var dayOfTheWeekCode = ((Math.floor(year % 100 / 12) + ((year % 100) % 12) + Math.floor((year % 100 % 12) / 4) + day + monthcode) % 7);
    var dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var dayofWeekValue = dayOfTheWeek[dayOfTheWeekCode];
    return dayofWeekValue;
}

function makeCalendar() {
    var year = 2020;
    var month_days = [1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //var month_names = ["01", "02", "03"];
    for (var i = 1; i < 13; i++) {
        for (var j = 1; j <= month_days[i]; j++) {
            var dayOfWeek = getDayOfTheWeek(year, i, j);
            console.log(i + "-" + j + "-" + year + " is a " + dayOfWeek);
        }
    }
}
makeCalendar();

