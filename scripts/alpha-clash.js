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

    // get the expected alphabet to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(playerPressedAlphabet, expectedAlphabet);

    if(playerPressedAlphabet === expectedAlphabet)
    {
        console.log('you got a point');
        console.log('you have pressed ', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else
    {
        console.log('You missed. You lost a life');
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
    showElementById('play-ground');
    continueGame();
}

