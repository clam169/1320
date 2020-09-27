function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}
 
function getDayOfTheWeek(year, month, day) {
    var dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];        

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

    // var yy = (String(year).charAt((String(year).length)-2)) + 
    // (String(year).charAt((String(year).length)-1))

    var dayOfTheWeekCode = ((~~((year%100)/12) + ((year%100)%12) + (~~(((year%100)%12) / 4)) + day + monthcode) % 7);
    var dayofWeekValue = dayOfTheWeek[dayOfTheWeekCode];
    return dayofWeekValue;

    // var dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    // var nMonths = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
    // var nDays = 1
    // console.log(dayOfTheWeekCode);
    // console.log(dayOfTheWeekCode);



    // for (var i = 0; i < 30; i++){
    //     getDayOfTheWeek(2020, 01, i);
    //     console.log(nMonths[0]+"-"+(nDays+i) + "-" + year +" is a " + dayOfTheWeek[dayOfTheWeekCode]);
    //  }
}

function makeCalendar() {
    var year = 2019;
    var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //var month_names = ["01", "02", "03"];
    for (var i = 0; i < 12; i++) {
        for (var j = 1; j <= month_days[i]; j++) {
            var dayOfWeek = getDayOfTheWeek(year, i, j);
            console.log(i + "-" + j + "-" + dayOfTheWeekCode);
        }
    }

makeCalendar();
    

}

makeCalendar();


//getDayOfTheWeek(1989, 08, 16);

//getDayOfTheWeek(2020, 01, 02);

