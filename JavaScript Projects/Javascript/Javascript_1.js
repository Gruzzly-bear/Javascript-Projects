function Animal1() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is an awesome Animal!";
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
        break;
        case "Gerbil":
            Animal_Output = "Gerbil" + Animal_String;
        break;
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Cthulu":
            Animal_Output = "Cthulu" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an Animal from the list, it's case sensitive.";    
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Text_change() {
    var A = document.getElementsByClassName("Click");
    A[0] .innerHTML = "You did it!";
}

function Canvus() {
    var c = document.getElementById("myCanvus");
    var ctx = c.getContext("2d");
    var img = document.getElementById("thing");
    ctx.drawImage(img, 10, 10);
  }

  function Grad() {
    var c = document.getElementById("Grad1");
    var ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "green");
    
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
  }

