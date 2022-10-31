function addition_Function() {//creates a function to html
    var Addition = 2 + 3;//Shows what addition problem we are using
    document.getElementById("Math").innerHTML = "2 + 3 = " + Addition;//Math is the id used in html
}
//I used different math ids so I could see what I was creating and understand better.
function subtraction() {
    var Subtraction = 7 - 2;
    document.getElementById("Math1").innerHTML = "7 - 2 =" + Subtraction;//is used for subtraction
}

function multiply() {
    var simple_Math = 11 * 5;
    document.getElementById("Math2").innerHTML = "11 * 5 =" + simple_Math;//multiplying 2 numbers
}

function division() {
    var simple_Math = 55 / 11;
    document.getElementById("Math3").innerHTML = "55 / 11 =" + simple_Math;//diveding 2 numbers
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5; // does a complex problem in order of operations
    document.getElementById("Math4").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function remainder() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = " When you divide 25 by 6 you have a remainder of: " + simple_Math;// will give you a remainder of what you divided.
}

function negation() {
    var x = 5;
    document.getElementById("Math6").innerHTML = -x;// this makes the number a negative
}

function increment() {
    var x = 5;
    x++;
    document.getElementById("Math7").innerHTML = x++; // the ++ makes the number go up by 1
}

function decrement() {
    var x = 6;
    x--;
    document.getElementById("Math8").innerHTML = x--; // the -- makes the number go down by 1
}

window.alert(Math.random()* 100);//This adds a random number on an alert window when you open the page