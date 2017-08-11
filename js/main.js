function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function showTime() {
    var d = new Date();
    var x = document.getElementById("container");
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    x.innerHTML = h + ":" + m + ":" + s;
}