var answer;
var guess = document.getElementById("guess");
var guessLeft = document.getElementById("guessLeft");
var win = 0;
var loss = 0;
var count = 0;
function getRandomLetter() {//create a random letter
    var randomIndex = Math.floor(Math.random() * 26);
    answer = "abcdefghijklmnopqrstuvwxyz".charAt(randomIndex);

}
getRandomLetter();
alert(answer);
document.onkeyup = function (e) {
    var realKey = e.key.toLowerCase();
    var boolKey = e.which > 64 && e.which < 91;//restrict key from a to z
    if (count == 10) { //no more guess
        count = 0;
        guess.innerHTML = "";
        guessLeft.innerHTML = "10";
        alert("you have no more chance!the right answer is " + answer);
        loss++;
        document.getElementById("loss").innerHTML = loss;
        getRandomLetter();
        alert("next letter is " + answer);

    } else if (boolKey && realKey != answer) { //a letter but not the answer
        if (guess.innerHTML.includes(realKey)) {//repeated letter
            alert("You have entered this letter");
        } else {//new letter
            guess.innerHTML += realKey;
            count++;
            guessLeft.innerHTML = (10 - count);
        }
       
    } else if (boolKey && realKey == answer) {//answer
        count = 0;
        guess.innerHTML = "";
        guessLeft.innerHTML = "10"
        alert("you win! the answer is " + answer);
        win++;
        document.getElementById("win").innerHTML = win;
        getRandomLetter();
        alert("next letter is " + answer);
    } else {//not a letter
        alert("please enter a letter");
    }

}