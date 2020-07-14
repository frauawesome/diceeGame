function playGame() {
    // generating a random number between 1 and 6
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    // create corresponding image src for die of the random number
    imgSrc1 = "images/dice" + randomNumber1 + ".png"
    imgSrc2 = "images/dice" + randomNumber2 + ".png"

    // replace previous picture with picture of the random number
    die1 = document.getElementsByClassName('img1')[0];
    die1.setAttribute("src", imgSrc1);

    die2 = document.getElementsByClassName('img2')[0];
    die2.setAttribute("src", imgSrc2);

    // Name the winner!
    if (randomNumber1 > randomNumber2) {
        title = document.getElementsByClassName('title')[0];
        title.innerHTML = "Player 1 won!"
    } else if (randomNumber1 < randomNumber2) {
        title = document.getElementsByClassName('title')[0];
        title.innerHTML = "Player 2 won!"
    } else {
        title = document.getElementsByClassName('title')[0];
        title.innerHTML = "Draw!"
    };
}