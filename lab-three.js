function getDayOfTheWeek(year, month, day){
    var monthcode
        if (month == 4 || month == 7){
            monthcode = 0;
        }
        else if (month == 1 || month == 10){
            monthcode = 1;
        }
        else if (month == 5){   
            monthcode = 2;
        }
        else if (month == 8){
            monthcode = 3;
        }
        else if (month == 2 || month == 3 || month == 11){
            monthcode = 4;
        }
        else if (month == 6){
            monthcode = 5;
        }
        else (monthcode = 6);
    //calculating special scenarios//
        if (String(year).length = 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 6){
            monthcode = (monthcode + 6);
        }
        else if (String(year).length = 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 7){
            monthcode = (monthcode + 4);
        }
        else if (String(year).length = 4 && String(year).charAt(0) == 1 && String(year).charAt(1) == 8){
            monthcode = (monthcode + 2);
        }
        else if (String(year).length = 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 0){
            monthcode = (monthcode + 6);
        }
        else if (String(year).length = 4 && String(year).charAt(0) == 2 && String(year).charAt(1) == 1){
            monthcode = (monthcode + 4);
        }
    //calculating the day of the week//

    var yy = (String(year).charAt((String(year).length)-2)) + 
    (String(year).charAt((String(year).length)-1));
    var dayOfTheWeekCode = ((~~(yy/12) + (yy%12) + (~~((yy%12) / 4)) + day + monthcode) % 7);
   
    console.log(monthcode);
    console.log(yy);
    console.log(dayOfTheWeekCode);
}

getDayOfTheWeek(2020, 09, 24);

function isLeapYear(year){
    if (year % 4 == 0){
        isLeapYear = true;
    }
    else if (year % 100 <= 1){
        isLeapYear = true;
    }
    else if (year % 400 == 0){
        isLeapYear = true;
    }
    else isLeapYear = false;
}

isLeapYear(2020);
console.log(isLeapYear);

