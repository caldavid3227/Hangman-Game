window.onload = function() {

    const words = ["stargate", "lightsaber", "startrek", "enterprise", "voyager", "sith", "jedi", "atlantis", "jaffa", "goa'uld", "hyperspace", "clone", "skywalker", "hoth", "phaser", "borg"]
    // choose ranodm word

    var chosenWord = words[Math.floor(Math.random() * words.length)];

    var answerWord = chosenWord.split('');

    var letterArr = [];


    console.log(answerWord)

    var lives = 15;

    function displayLives() {

        document.getElementById('lives').innerHTML = lives;

    }

    var letters = [];

    const underScore = [];


    console.log(chosenWord);

    var generateUnderscore = () => {
        for (let i = 0; i < chosenWord.length; i++) {
            underScore.push('_');


        }
        return underScore;
    };

    function displayUnderscore() {

        const text = "";

        underScore.join('text');

        document.getElementById('underscore').innerHTML = underScore;
    };

    generateUnderscore();
    displayUnderscore();

    console.log(underScore);

    const buttons = document.querySelectorAll('.letter-btn');

    for (let i = 0; i < buttons.length; i++) {


        buttons[i].addEventListener('click', (event) => {
            console.log(buttons[i]);

            const letterValue = buttons[i].dataset.letter

            console.log(buttons[i].dataset.letter);


            if (chosenWord.indexOf(letterValue) > -1) {

                letterArr.push(letterValue);

                console.log(letterArr);

//                 function arrayFindReplace(array, findValue, replaceValue){
//     while(chosenWord.indexOf(findValue) !== -1){
//         let index = chosenWord.indexOf(findValue);
//         [index] = replaceValue;
//     }
// }


            // for (var i = 0; i < chosenWord.length; i++) {
            //     chosenWord[i] = letterValue
            // }





            } else {

                --lives;

                var node = document.createElement("li");

                var textNode = document.createTextNode(letterValue);

                node.appendChild(textNode)

                document.getElementById('wrongGuess').appendChild(node);

                console.log(lives);
            }


            displayLives();

            if (lives === 0) {

                alert('You lose!')

                window.location.reload(false);

            }


            if (answerWord.length === letterArr.length) {

                alert('You win!');

                window.location.reload(false);
            }

        });


    }
};