
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

        console.log(startDayInWeek, monthLong)

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
                    arr[month][x][y] = counter;
                    counter++;
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