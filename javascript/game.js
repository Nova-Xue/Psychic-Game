var answer;
var guess = document.getElementById("guess");
var guessLeft = document.getElementById("guessLeft");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var w = 0;
var l = 0;
var count = 0;
function getRandomLetter() {//create a random letter
    var randomIndex = Math.floor(Math.random() * 26);
    answer = "abcdefghijklmnopqrstuvwxyz".charAt(randomIndex);

}

function reset() {
    guess.innerHTML = "";
    guessLeft.innerHTML = "";
    win.innerHTML = w;
    loss.innerHTML = l;
    count = 0;
    getRandomLetter();
    alert(answer);

}

reset();

// document.onkeyup = function (e) {
//     var realKey = e.key.toLowerCase();
//     var boolKey = e.which > 64 && e.which < 91;//restrict key from a to z
//     if (count == 10) { //no more guess
//         count = 0;
//         guess.innerHTML = "";
//         guessLeft.innerHTML = "10";
//         alert("you have no more chance!the right answer is " + answer);
//         loss++;
//         document.getElementById("loss").innerHTML = loss;
//         getRandomLetter();
//         alert("next letter is " + answer);

//     } else if (boolKey && realKey != answer) { //a letter but not the answer
//         if (guess.innerHTML.includes(realKey)) {//repeated letter
//             alert("You have entered this letter");
//         } else {//new letter
//             guess.innerHTML += realKey;
//             count++;
//             guessLeft.innerHTML = (10 - count);
//         }

//     } else if (boolKey && realKey == answer) {//answer
//         count = 0;
//         guess.innerHTML = "";
//         guessLeft.innerHTML = "10"
//         alert("you win! the answer is " + answer);
//         win++;
//         document.getElementById("win").innerHTML = win;
//         getRandomLetter();
//         alert("next letter is " + answer);
//     } else {//not a letter
//         alert("please enter a letter");
//     }

// }
document.onkeyup = function onKeyUp(e) {
    var key = e.key.toLowerCase();
    var boolKey = (e.keyCode < 91 && e.keyCode > 64) || (e.keyCode < 123 && e.keyCode > 96);//restrict key to letters
    if (!boolKey) {
        alert("please enter a letter");
    } else {//a letter
        if (count < 5) {//have chance
            if (key == answer) {//right letter
                alert("you win");
                w++;
                reset();
            } else {//wrong letter
                if (guess.innerHTML.includes(key)) {//repeated letter
                    alert("You have entered this letter");
                } else {//new wrong letter
                    guess.innerHTML += key;
                    count++;
                    guessLeft.innerHTML = (5 - count);
                }
            }
        } else {//not any more
            alert("no more chance");
            l++;
            reset();
        }

    }
}