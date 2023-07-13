var span = document.getElementById("level");
var requirement = document.getElementById("requirement");
var input = document.getElementById("numbers");
var result = document.getElementById("result");
var n = 5;
var dem = 1;
var begin = arrRandom(n, dem);
function xuat(arr) {
    var inner = "";
    for (var i = 0; i < arr.length; i++) {
        inner += String(arr[i]) + "-";
    }
    requirement.innerHTML += inner.substring(0, inner.length - 1);
}
xuat(begin);
setTimeout(function () {
    console.log("Delayed for 1 second.");
    requirement.innerHTML = "";
}, 2000);
span.innerHTML = String(dem);
console.log(begin);
function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) { }
}
function random(n) {
    var x = Math.pow(10, n) - Math.pow(10, (n - 1));
    var y = Math.pow(10, (n - 1));
    var int = Math.floor(Math.random() * x) + y;
    return int;
}
function arrRandom(n, dem) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = random(dem);
    }
    return arr;
}
function arrToString(a) {
    var chuoi = "";
    for (var i = 0; i < a.length; i++) {
        chuoi += a[i] + " ";
    }
    return chuoi.substring(0, chuoi.length - 1);
}
function subString(s) {
    var i = 0;
    var j = s.length - 1;
    for (i; i < s.length; i++) {
        if (s.charCodeAt(i) != 32)
            break;
    }
    for (j; j >= 0; j--) {
        if (s.charCodeAt(j) != 32)
            break;
    }
    var sub = s.substring(i, j + 1);
    console.log(typeof sub);
    return sub;
}
function reset() {
    requirement.innerHTML = "";
    dem = 1;
    begin = arrRandom(n, dem);
    xuat(begin);
    span.innerHTML = String(dem);
    console.log(begin);
    setTimeout(function () {
        console.log("Delayed for 1 second.");
        requirement.innerHTML = "";
    }, 1000);
}
function check() {
    requirement.innerHTML = "";
    if (subString(input.value) != arrToString(begin))
        result.innerHTML = "Sai mất rồi :D";
    else {
        if (dem == n) {
            result.innerHTML = "Bạn là người có siêu trí nhớ :D";
        }
        else {
            dem++;
            result.innerHTML = "Chính xác";
            begin = arrRandom(n, dem);
            xuat(begin);
            setTimeout(function () {
                console.log("Delayed for 1 second.");
                requirement.innerHTML = "";
            }, 2000 * dem);
            console.log(begin);
        }
    }
    span.innerHTML = String(dem);
    input.value = "";
    console.log(dem);
}
