function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconds = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (seconds.toString().length == 1) {
        seconds = '0' + seconds;
    }
    var dateTime = year + '/' + month + '/' + day + '/' + hour + ':' + minute + ':' + seconds;
    return dateTime; 
}

//  example usage: realtime clock

setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 1000);

