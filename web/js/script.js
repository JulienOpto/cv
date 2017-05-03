$(document).ready(function () {

    var string = "JULIEN MARTIN";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 120);
    })();

    var string2 = "DEVELOPPEUR WEB";
    var str2 = string2.split("");
    var el2 = document.getElementById('str2');
    setTimeout(function animate2() {
        str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running);
        var running = setTimeout(animate2, 120);
    }, 1900)();

});