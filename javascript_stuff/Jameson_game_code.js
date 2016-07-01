var Person = function(id, firstname, lastname) {
  this.id = id,
  this.firstname = firstname,
  this.lastname = lastname,
  this.getInitials = function() {
    return this.firstname.charAt(0) + this.lastname.charAt(0);
  };
}

var Game = function() {
  this.students = [
    new Person(1, "Markham", "Gross"),
    new Person(2, "Ari", "Zamudio"),
    new Person(3, "Liam", "Hurt"),
    new Person(4, "Mike", "McDermott"),
    new Person(5, "Dylan", "Eckert"),
    new Person(6, "Aaron", "Martin"),
    new Person(7, "Markus", "Brun"),
    new Person(8, "Blaze", "Halderman"),
    new Person(9, "Jayson", "Smith"),
    new Person(10, "Svyatoslav", "Safonov")
  ],
  this.start = function () {
    this.rightAnswer = Math.floor(Math.random() * 10) + 1;
    this.currentScore = 10;
    this.gameClock = 0;
    this.previousGuesses = [];
    this.gameStart = new Date();
    this.gameRef = setInterval(gameTimer, 1000);

    showPrompt();
  };
};

var gameTimer = function() {
  checkTime();
}

var checkTime = function() {
  var checkDate = new Date();
  game.gameClock = Math.floor( (checkDate - game.gameStart) / 1000 );

  if (game.gameClock >= 20) {
    clearInterval(game.gameRef);
    alert('Sorry, you lost without finding pie.  Please try again.');
    game.start();
  }
}

var showPrompt = function() {
  var guess = prompt('Guess who ate the pie?  Enter initials only.');

  if (guess === '') {
    showPrompt();
  } else if (guess){
    checkGuess( guess.toUpperCase() );
  }
};
// this runs the game
var checkGuess = function(guess) {
  checkTime();

  if (game.previousGuesses.indexOf(guess) !== -1) {
    wrongAnswer('You already guessed that!');
    return;
  }

  for (i = 0; i < game.students.length; i++) {
    if ( guess === game.students[i].getInitials() ) {
      if ( game.students[i].id === game.rightAnswer ) {
        rightStudent('You win with a score of ' + game.currentScore + ' in ' + game.gameClock + ' seconds!');
        game.start();
        return;
      } else {
        game.previousGuesses.push(guess);
        wrongAnswer('Wrong!  Find the pie!');
        return;
      }
    }
  }

  wrongAnswer('No matching student found.');
}
// up to this point
var wrongAnswer = function(message) {
  game.currentScore--;
  document.getElementById('display').textContent = message.
}

var rightStudent = function (message) {
  document.getElementById('display').textContent = message
}

var restart = function() {
  game.start();
}

var game = new Game();
game.start();

var grabGuess = function() {
   var guessGrabbed = document.getElementById('guess').value;
   checkGuess(guessGrabbed);
}
document.getElementById('submit').addEventListener('click', grabGuess);
