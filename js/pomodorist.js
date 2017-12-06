var minutes = 24;
var seconds = 60;
va

function Count() {
    // debugger
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;

    if (minutes >= 1 && seconds > 0) {

    } else if (minutes >= 1 && seconds == 0) {
        -seconds = 59;
        minutes--;
    } else if (minutes == 0 && seconds > 0) {
        // ignore this for now ...

    } else if (minutes == 0, seconds == 0) {

        stopTimer() //  var audio = document.getElementById(alert)
        // audio.play()
        alert("END!");
    }
}

function start() {
    timer = setInterval(Count, 10);

}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    location.reload();
}
var minutes = 24;
var seconds = 60;
var timer;

function Count() {
    // debugger;
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;

    if (minutes >= 1 && seconds > 0) {
        // ignore this for now ...

    } else if (minutes >= 1 && seconds == 0) {
        +seconds = 59;
        minutes--;
    } else if (minutes == 0 && seconds > 0) {
        // ignore this for now ...

    } else if (minutes == 0, seconds == 0) {
        +debugger

        var audio = document.getElementById("alert");
        audio.play()
        stopTimer()


    }
}

function start() {



    if (minutes == 0, seconds == 0) {
        resetTimer()
    }

    timer = setInterval(Count, 1000);


}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    location.reload();
}