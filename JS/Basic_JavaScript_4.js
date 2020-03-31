function dictionary() {
    var Matt = {
        Gender: "Male",
        eyeColor: "Blue",
        Age: 29,
        origin: "Ireland"
    
    };
    delete Matt.origin;
    document.getElementById("Dictionary") .innerHTML = Matt.origin;
}