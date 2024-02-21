/** 
function play() {
    //step 1: hide the home screen
    const homeSection = document.getElementById("home-screen");
    homeSection.classList.add('hidden');

    //Show the play ground
    const playGroundSection = document.getElementById('play-ground');
    ///console.log(playGroundSection.classList);
    playGroundSection.classList.remove('hidden');
}
*/

function pressKeyboardButton(event) {
    const playerPressedAlphabet = event.key;
    //console.log('Player pressed alphabet = ', playerPressedAlphabet);

    // stop the game if press "Esc"
    if(playerPressedAlphabet === 'Escape')
    {
        gameOver();
    }

    // get the expected alphabet to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(playerPressedAlphabet, expectedAlphabet);

    if(playerPressedAlphabet === expectedAlphabet)
    {
        console.log('you got a point');

        
        //for better reusable code to get & set the current score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //-------------------------------------------------------------------------------------

        /** 
        //score update :
        //1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        //2. increase the score by 1
        const newScore = currentScore + 1;

        //3. show the updated score
        currentScoreElement.innerText = newScore;
        */

        //start new round each time call this function
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else
    {
        console.log('You missed. You lost a life');

        
        //for better reusable code to get & set the current life span
        const currentLife = getTextElementValueById('current-life');
        const updatedLifeSpan = currentLife - 1;
        setTextElementValueById('current-life', updatedLifeSpan);
        
        //-------------------------------------------------------------------------------------
        /** 
        // life span reduce

        const currentLifeSpan = document.getElementById('current-life');
        const currentLifeSpanText = currentLifeSpan.innerText;
        const currentLife = parseInt(currentLifeSpanText);

        const newLifeSpan = currentLife - 1;

        currentLifeSpan.innerText = newLifeSpan;
        */
        if(updatedLifeSpan === 0)
        {
            gameOver();
        }
    }

}
document.addEventListener("keyup", pressKeyboardButton);


function continueGame() {
    //step-1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is = ', alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}
    

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const gameLastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', gameLastScore);

    // Clear the last selected alphabet highlight
    const currentAlphabets = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabets);
}

