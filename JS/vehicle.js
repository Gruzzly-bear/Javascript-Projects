function Pc(Brand, Model, Yeaer, Color) {
    this.Pc_Brand = Brand;
    this.Pc_model = Model;
    this.Pc_Year = Year;
    this.Pc_Color = Color;
}
var Jack = new Pc("Dodge", "Viper", 2020, "Red");
var Emily = new Pc("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Pc("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML = 
    "Erik drives a " + Erik.Pc_Color + "-colored " + Erik.Pc_model +
    " manufactured in " + Erik.Pc_Year;
}