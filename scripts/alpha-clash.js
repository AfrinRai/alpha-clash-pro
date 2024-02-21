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


function continueGame() {
    //step-1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is = ', alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

