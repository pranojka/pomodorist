function Count() {

    var minutes = 25;
    var seconds = 00;
    timer = setInterval(function() {

        document.getElementById("seconds").innerHTML = seconds % 60;
        document.getElementById("minutes").innerHTML = parseInt(minutes);
        seconds--;
        if (seconds < 1) {
            seconds = 59;
            minutes--;
        }
    }, 1000);




}

function stopTimer() {

    clearInterval(timer);

}