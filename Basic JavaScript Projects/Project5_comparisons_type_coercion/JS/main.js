var A = (typeof 5);//shows text for number
document.write(A + "<p>");//creating a paragraph break

var B = ("5" + 5);//adds the 5 to the end of the five giving you 55.
document.write(B + "<br>");// creating line breaks

function my_Function() {
    document.getElementById("nan").innerHTML = 0/0;//results in a nan
}

function nan() {
    document.getElementById("true").innerHTML = isNaN('This is a string');//results in a true nan
}

function funk() {
    document.getElementById("false").innerHTML = isNaN('005');//results in a false nan
}

var C = (2e310);//this is for infinity
document.write(C + "<p>");

function plus() {
    var addition = 1e555 + 1e555;
    document.getElementById("posi").innerHTML = "1e555 + 1e555 =" + addition;
}

function neg() {
    var simple_Math = -1e555 * 555;
    document.getElementById("negi").innerHTML = "-1e555 * 555 =" + simple_Math;
}

var D = (5 > 4);//boolean true statement
document.write(D + "<p>");

var E = (5 < 4);//boolean false statement
document.write(E + "<p>");

console.log(2 + 3);//can get to console log by using ctrl+shift+i

console.log(5 < 4)

var F = (2 + 3 == 5);//is the left equal to the right true or false
document.write(F + "<p>");

var G = (5 + 5 == 5);
document.write(G + "<p>");

var H = (x = 5, y = 5, x === y);//same data type and value
document.write(H + "<br>");

var I = (x = 5, y = "5", x === y);//same value different data type
document.write(I + "<br>");

var J = (x = 5, y = 5 + 5, x === y);//same data type different value
document.write(J + "<br>");

var K = (x = 5, y = "five", x === y);
document.write(K + "<p>");

var L = (5 > 2 || 5 < 5);// || is used for "or" statements
document.write(L + "<br>");

var M = (5 < 3 || 5 > 9);
document.write(M + "<p>");

var N = (5 < 9 && 5 > 3);// && is used for "and" statements
document.write(N + "<br>");

var O = (5 < 4 && 5 < 9);
document.write(O + "<p>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 < 3);//not fuctions
}

function Yes() {
    document.getElementById("yes").innerHTML = !(5 < 9);
}