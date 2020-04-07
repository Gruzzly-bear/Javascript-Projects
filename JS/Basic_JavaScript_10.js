function string() {
    var words = "Here are some words!"
    document.getElementById("words") .innerHTML = words.length;
}

var Shoes = ["Emerica", "CCS", "Globe", "Adio", "lakai"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Shoes.length; Y++) {
    if (Y === 2) { continue; }
    if (Y === 4) { break; }
    Content += Shoes[Y] + "<br>";
    }
    document.getElementById("List_of_shoes") .innerHTML = Content;
}

function C_pics() {
    var C_Picture = [];
    C_Picture[0] = "Sleeping";
    C_Picture[1] = "Eating a human Sacrifice";
    C_Picture[2] = "coloring cat pictures";
    C_Picture[3] = "destroying the world";
    document.getElementById("Cthulu").innerHTML = "In this picture, Cthulu is " +
        C_Picture[2] + ".";
}

function constant() {
    const phone = {type:"Pixel 4", brand:"Google", color:"white"};
    phone.color = "black";
    phone.price = "$799";
    document.getElementById("constant").innerHTML = "The cost of the " + 
    phone.type + " was " + phone.price;

}

function Let() {
    var X = 13;
    document.write(X);
    {
        let X = 55;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}
function guitar() {
    let guitar = {
        brand: "Ovation ",
        model: "ce48p ",
        color: "Awesome Blue ",
        description : function() {
            return "The guitar is an " +this.color + this.brand + this.model;
            }
        };
        document.getElementById("Guitar").innerHTML = guitar.description();
}
function whatin() {
    return "Ayyyyyyyyyyy";
  }