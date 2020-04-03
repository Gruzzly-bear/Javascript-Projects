function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age <18) ? "You are too young ":"You are old enough ";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

function Pc(Brand, Model, Color) {
    this.Pc_Brand = Brand;
    this.Pc_model = Model;
    this.Pc_Color = Color;
}
var Jim = new Pc("Alienware", "Area 51M", "Black");
var Dwight = new Pc("Dell", "Insperion 1350", "Ole' Gray");
var Michael = new Pc("HP", "Omen 15t", "Red and Black");
function myFunction() {
    document.getElementById("Comp") .innerHTML = 
    "Jim uses a " + Jim.Pc_Color + " " + Jim.Pc_model;
}

function egg() {
    document.getElementById("nest") .innerHTML = hatch();
    function hatch(){
        var sentence = "This here is";
        sentence += " my nested function";
    }
}