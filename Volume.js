let length = parseFloat(prompt("請輸入長度(cm)："));
let width = parseFloat(prompt("請輸入寬度(cm)："));
let height = parseFloat(prompt("請輸入高度(cm)："));





function volume(a, b, c) { return a * b * c; }
let volume1 = volume(length, width, height);


var lengthShow = length.toFixed(2);
var widthShow = width.toFixed(2);
var heightShow = height.toFixed(2);
var volumeShow = volume1.toFixed(2);

document.getElementById('number1').innerHTML = "Length(cm): "+lengthShow;
document.getElementById('number2').innerHTML = "Width(cm): "+widthShow;
document.getElementById('number3').innerHTML = "Height(cm): "+heightShow;
document.getElementById('number4').innerHTML = lengthShow;
document.getElementById('number5').innerHTML = widthShow;
document.getElementById('number6').innerHTML = heightShow;
document.getElementById('result1').innerHTML = volumeShow;



