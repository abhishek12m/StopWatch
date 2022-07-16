window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var appendSeconds = document.getElementById("seconds");
    var appenedTens = document.getElementById("tens");
    var buttonstart = document.getElementById("start");
    var buttonstop = document.getElementById("stop");
    var buttonreset = document.getElementById("reset");
    var Interval;
    buttonstart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(setTimer, 10);
    }
    buttonstop.onclick = function () {
        clearInterval(Interval);
    }
    buttonreset.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        tens = "00";
        appendSeconds.innerHTML = seconds;
        appenedTens.innerHTML = tens;
    }
    function setTimer() {
        tens++;
        if (tens <= 9) {
            appenedTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appenedTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appenedTens.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}