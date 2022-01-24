const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

function rpsGame(yourChoice) {
    var humanChoice, DEALERChoice;
    humanChoice = yourChoice.id;
    DEALERChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, DEALERChoice);
    message = finalMessage(results)
    rpsFrontEnd(yourChoice.id, DEALERChoice, message);

}

/**
 * Returns either 0, 1 or 2
 */
function randToRpsInt() {
    return Math.floor(Math.random() * 3)
}

/**
 * Takes in a integer and returns the choice as a string.
 * @param {int} number - Numbers 0-2
 */
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

/**
 * Takes in your choice & computer's choice as strings and returns
 * the scores as an array.
 * @param {string} yourChoice 
 * @param {string} computerChoice 
 */
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' }
    } else if (yourScore == 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' }
    } else {
        return { 'message': 'You won!', 'color': 'green' }
    }
}

function rpsFrontEnd(humanImageChoice, DEALERImageChoice, finalMessage) {
    var items = ['rock', 'paper', 'scissors'];

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var DEALERDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    DEALERDiv.innerHTML = "<img src='" + imagesDatabase[DEALERImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(DEALERDiv);

}