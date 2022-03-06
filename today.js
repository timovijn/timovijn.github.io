
    // n =  new Date();
    // y = n.getFullYear();
    // m = n.getMonth() + 1;
    // d = n.getDate();
    // document.getElementById("today").innerHTML = y + " " + m + " " + d;

var MyDate = new Date();
var MyDateString;

//debug
//MyDate.setDate(MyDate.getDate() - 60);

document.getElementById("today").innerHTML = MyDate.getFullYear() + ' ' + ('0' + (MyDate.getMonth()+1)).slice(-2) + ' ' + ('0' + MyDate.getDate()).slice(-2);