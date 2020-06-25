function few_words() {
    alert("Why did you press it!"); // Displays a popup
    var str = "Here are a few words";
    var result = str.fontcolor("red"); // changes the color to red.
    document.getElementById("some_words") .innerHTML = result;

}

function myFunction() {
    var sentence = "You shouldn't have clicked this,";
    sentence += " But you did anyway.";
    document.getElementById("Concatenate") .innerHTML = sentence; // gets the id of selected element and displays the function. Displays it where the previous text was.
}

function myDate() {
    document.write(Date()); //displays the date
}

function concStrings() {
    var word = "Purple ";
    var word2 = "Dog";
    alert(word + word2);

}
function expression1() {
    var str = "Dogs are super cool!";
    var res = str.replace(/dogs/i, "Cats");
    alert(res);
}