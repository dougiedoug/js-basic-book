var firstDate = new Date("2018-05-01");
var now = new Date();

var nowTime = now.getTime();
var firstTime = firstDate.getTime();
var timeMet = Math.round((nowTime-firstTime)/(1000*60*60*24));

document.querySelector("#accent").innerText=timeMet+"일";

function calcDate(days){
    var future= firstTime+days*(1000*60*60*24);
    var result = new Date(future);
    var year = result.getFullYear();
    var month = result.getMonth()+1;
    var day = result.getDate();
    document.querySelector("#date"+days).innerText=year + "년 "+month+"월 "+ day+" 일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);