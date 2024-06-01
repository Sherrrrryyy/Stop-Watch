var hours = document.getElementById("hours")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var msec = document.getElementById("msec")
var startFromZero;

var hour = 0;
var minute = 0;
var second = 0;
var msecond = 0;

function start() {
    msecond++
    msec.innerHTML = msecond
    if (msecond === 99) {
        msecond = 0
        second++
        sec.innerHTML = second
    } else if (second > 59) {
        second = 0
        minute++
        min.innerHTML = minute
    } else if (minute > 59) {
        minute = 0
        hour++
        hours.innerHTML = hour
    }
}

function startWatch() {
    startFromZero = setInterval(start, 10)
    var enbordis = document.getElementById('enbordis')
    enbordis.disabled = "true"


}

function resetWatch() {
    clearInterval(startFromZero)
    hour = 0;
    minute = 0;
    msecond = 0;
    second = 0;

    hours.innerHTML = "00"
    min.innerHTML = "00"
    sec.innerHTML = "00"
    msec.innerHTML = "00"

    var enbordis = document.getElementById('enbordis')
    enbordis.disabled = ""

}

function stopWatch() {
    clearInterval(startFromZero)
    var enbordis = document.getElementById('enbordis')
    enbordis.disabled = ""

}