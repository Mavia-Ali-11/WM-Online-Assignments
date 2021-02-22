function getNum(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

var exp = "";
function back() {
    exp = result.value;
    exp = exp.slice(0 , exp.length - 1);
    result.value = exp; 
}

function getSq() {
    exp = result.value;
    exp = exp * exp;
    result.value = exp;
}