// var x = 1;
// function a() {
//     var y = 2;
//     output(y);
// }
// function b() {
//     var z = 3;
//     output(z);
// }
// function output(value) {
//     var para = document.createElement('p');
//     document.body.appendChild(para);
//     para.textContent = 'Value: ' + value;
// }
var input = document.querySelector('.numberInput');
var para = document.querySelector('.par');

function squared(num) {
    return num * num;
    }
function cubed(num) {
        return squared(num)*num
}
function factorial(num) {
    var x = num;
    while(x > 1) {
        num *= (x-1);
        x--;
    }
    return num;
}

input.onchange = function() {
    var num = input.value;
    if(isNaN(num)) {
        para.textContent = 'You need a number!';
    }
    else if(num == ""){
        para.textContent = "";
    }
    else {
        para.textContent = num + ' squared is ' + squared(num)+'. '+ num + ' cubed is ' + cubed(num)+'. '+ num + ' factorial is ' + factorial(num) + '.';
    }
}