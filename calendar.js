
var tr = new Date();
var curYear = tr.getFullYear();
var curMonth = tr.getMonth();
var curDate = tr.getDate();

function calcTable(year) {
    // generate a new 3D array for months, days, and year
    let arr = new Array(12); // 12 months
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(6); // 6 weeks a month
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = new Array(7); // 7 days a week
        }
    }

    for (let month = 0; month < arr.length; month++) {
        let startDayInWeek = new Date(year, month, 0).getDay() + 1;

        let monthLong = new Date(year, month + 1, 0).getDate() + 1;

        let beforeCount = 0;

        let counter = 1;    // Any month that starts at day 1

        let startCount = false;

        for (let x = 0; x < arr[month].length; x++) {
            for (let y = 0; y < arr[month][x].length; y++) {
                if(beforeCount == startDayInWeek) {
                    startCount = true;
                } else {
                    beforeCount++;
                }

                if(startCount == true) {
                    arr[month][x][y] = counter++;
                } else {
                    arr[month][x][y] = "";
                }

                if(counter > monthLong) {
                    arr[month][x][y] = "";
                }
            }
        
        }
    }
    return arr;
}

function retCalendar(year, month) {
    var monthArr = calcTable(year)[month];
    var calendarCode = ``;
    
    for (var i = 0; i < monthArr.length; i++) { // goes through week
        var thisWeek = monthArr[i];
        calendarCode += `<tr>`;

        for (var j = 0; j < thisWeek.length; j++) {
            calendarCode = calendarCode + `<td class="pixel"`;
            if(typeof(thisWeek[j]) === 'number') {
                calendarCode = calendarCode + ` id="${year}-${month+1}-${thisWeek[j]}">${thisWeek[j]}`;
            } else {
                calendarCode = calendarCode + `>.`;
            }
            calendarCode = calendarCode + `</td>`;            
        }
        calendarCode += `</tr>`
    }
    return calendarCode;
}

function dateYearTemplate(year, month) {
    var date_year = `<ul>
    <li class="next">&#10095;</li>
    <li class="prev">&#10094;</li>
    <li>${month}<br /><span style="font-size: 18px">${year}</span></li>
    </ul>`;

    return date_year;
}
  
function weekdaysTemplate() {
    var weekdaysArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    var weekdaysRet = `<tr>`;

    for (let i = 0; i < weekdaysArr.length; i++) {
        weekdaysRet = weekdaysRet + `<td id="${weekdaysArr[i]}" class="weekNames">${weekdaysArr[i]}</td>`;
    }

    weekdaysRet = weekdaysRet + `</tr>`;

    return weekdaysRet;
}
