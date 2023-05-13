function displayResult() {
    //DICE1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage = "images/dice" + randomNumber1 + ".png";
    document.getElementById("d1").src = randomImage;

    //DICE2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage = "images/dice" + randomNumber2 + ".png";
    document.getElementById("d2").src = randomImage;

    //RESULT
    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Game Draw";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = " 🏆 Player 1 Won ";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Won 🏆 ";
    }
}
