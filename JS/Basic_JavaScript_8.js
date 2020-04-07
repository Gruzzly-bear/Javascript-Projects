function sentence() {
    var part_1 = "This is now "
    var part_2 = "a complete sentence"
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("one") .innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Matt a dull dude.";
    var Section = Sentence.slice(27, 31);
    document.getElementById("slice") .innerHTML = Section;
}

function big_Case() {
    var Sentence = "lower case this is not";
    var Bigcase = Sentence.toUpperCase();
    document.getElementById("up") .innerHTML = Bigcase;
}

function lets_Search() {
    var Sentence = "Let's do a word search";
    var Surch = Sentence.search("search");
    document.getElementById("srch") .innerHTML = Surch;
}

function string_Method() {
    var X =356;
    document.getElementById("Num_to_string") .innerHTML = X.toString();
}

function precision_Method() {
    var X = 1859.233322445523;
    document.getElementById("Precision") .innerHTML = X.toPrecision(7);
}

function fixed_Method() {
    var X = 1.233;
    document.getElementById("Fixed") .innerHTML = X.toFixed(2);
}

function value_Method() {
    var X = "What is my value?";
    document.getElementById("Value") .innerHTML = X.valueOf(X);
}

