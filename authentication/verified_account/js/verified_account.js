$(function() {
    var t = 5;
    var x = setInterval(function() {
        document.getElementById("seconds").innerHTML = t--;
        if (t < 0) {
            clearInterval(x);
            window.location.replace("https://www.google.com")
        }
    }, 1000);
});