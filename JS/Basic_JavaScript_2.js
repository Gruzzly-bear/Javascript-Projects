function few_words() {
    var str = "Here are a few words";
    var result = str.fontcolor("red");
    document.getElementById("some_words") .innerHTML = result;
}

function myFunction() {
    var sentence = "You shouldn't have clicked this,";
    sentence += " But you did anyway.";
    document.getElementById("Concatenate") .innerHTML = sentence;
}