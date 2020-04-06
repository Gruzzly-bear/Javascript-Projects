var X = 10;
function Sub_nums_1() {
    document.write(50 - X + "<br>");
}
function Sub_nums_2() {
    document.write(X-100);
}
Sub_nums_1();
Sub_nums_2();

function Mul_nums_1() {
    var Z = 30;
    console.log(14 * Z);
}
function Mul_nums_2() {
    console.log(Z * 100);
}
Mul_nums_1();
Mul_nums_2();

function Date_1() {
    if (new Date() .getHours() <18) {
        document.getElementById("Date") .innerHTML = "How are you today?";
    }
}

function Boop_1() {
    if (877 > 322) {
        document.getElementById("Booper") .innerHTML = "It totally is";
    }
}

function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough!";
    }
    else {
        Vote = "You are not old enough.";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is the evening"
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}