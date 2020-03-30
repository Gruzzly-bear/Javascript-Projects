function addition_Function() {
    var addition = 5 + 5;
    document.getElementById("Math") .innerHTML = "5 + 5 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 5;
    document.getElementById("unMath") .innerHTML = "5 - 5 = " + subtraction;
}

function cross_Function() {
    var simple_Math = 5 * 5;
    document.getElementById("crossMath") .innerHTML = "5 * 5 = " + simple_Math;
}

function slant_Function() {
    var simple_Math = 5 / 5;
    document.getElementById("slantMath") .innerHTML = "5 / 5 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (5 + 5) * 5 / 5 - 5;
    document.getElementById("moreMath") .innerHTML = "5 plus 5, multiplied by 5, divided by 5 and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 5;
    document.getElementById("Modo") .innerHTML = "When you divide 25 by 5 you have a remainder of: " + simple_Math;
}

function neg_O() {
    var x = 5;
    document.getElementById("negO") .innerHTML = -x;
}

function inc() {
    var X = 5;
    X++;
    document.write(X)
}

function dec() {
    var X = 5.35;
    X--;
    document.write(X)
}

function bin() {
    window.alert(Math.random());
}

function hund() {
    window.alert(Math.random() * 100);
}