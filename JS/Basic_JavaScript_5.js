function word() {
    document.write(typeof "word");
}

function number() {
    document.write(typeof 5);
}

function nan() {
    document.getElementById("nan") .innerHTML = 0/0;
}

function str() {
    document.getElementById("str") .innerHTML = isNaN('This is not a number');
}

function num() {
    document.getElementById("num") .innerHTML = isNaN('13');
}

function inf() {
    document.write(5E5009);
}

function neg() {
    document.write(-5E5009);
}

function gr() {
    document.write(500 > 1);
}

function lt() {
    document.write(0.6 > 1);
}

console.log(10+3);

console.log(isNaN('13'));

function co() {
    document.write("50" + 5);
}
function etw() {
    document.write(5 == 12);
}
function efi() {
document.write(2+3 == 5);
}

function tet() {
    F = 14;
    X = 14;
    document.write(F === X);
}

function tef() {
    G = 4;
    Z = 5;
    document.write(G === Y);
}

function th() {
    document.write(12>3 && 13 > 12);

}

function is() {
    document.write( 45 < 5 || 5555 < 5);
}

function is() {
    document.getElementById("is") .innerHTML = !(20 > 10);
}

function so() {
    document.getElementById("so") .innerHTML = !(5 > 10);
}
