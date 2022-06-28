function run() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);  //random 1-6
    document.querySelector(".img1").src = "/images/dice" + randomNumber1 + ".png";  //random dice 1-6 for left side

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);  //random 1-6
    document.querySelector(".img2").src = "/images/dice" + randomNumber2 + ".png";  //random dice 1-6 for right side

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "🚩Player 1 Wins!"
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Wins!🚩"
    }
    else {
        document.querySelector("h1").innerText = "Draw!"
    }
}