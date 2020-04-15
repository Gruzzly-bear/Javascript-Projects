function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is a breed of " + character.innerHTML);
}