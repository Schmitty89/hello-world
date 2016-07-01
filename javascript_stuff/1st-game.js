// We are going to create a very simple game.
//
// Things you will have to Google:
//
// 1.  Generating a random number(hint: Math.random())
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

    // 2.  Running a timer (hint: setInterval, clearInterval, etc)

    // 3.  Compare a start time and current time by seconds (hint: new Date)

    // The rules of the game are as follows:
    //
    // Someone ate Rush's chicken pot pie!  We know it was someone in class, but we don't know who.  Luckily, Tim knows, but he's going to make you guess.
    //
    // Goals of the game:
    // */

    // 1.  Use the following array to represent all students:

    var students = [{
        id: 1,
        firstname: "Markham",
        lastname: "Gross"
    }, {
        id: 2,
        firstname: "Ari",
        lastname: "Zamudio"
    }, {
        id: 3,
        firstname: "Liam",
        lastname: "Hurt"
    }, {
        id: 4,
        firstname: "Mike",
        lastname: "McDermott"
    }, {
        id: 5,
        firstname: "Dylan",
        lastname: "Eckert"
    }, {
        id: 6,
        firstname: "Aaron",
        lastname: "Martin"
    }, {
        id: 7,
        firstname: "Markus",
        lastname: "Brun"
    }, {
        id: 8,
        firstname: "Blaze",
        lastname: "Halderman"
    }, {
        id: 9,
        firstname: "Jayson",
        lastname: "Smith"
    }, {
        id: 10,
        firstname: "Svyatoslav",
        lastname: "Safonov"
    }]

    // 2.  Start the game:
    //  2.a Find a random number that represents the id of *one* of the students and store it as a global variable called "rightAnswer"
    //  2.b Give the user a starting score of 10 and store it in a global variable called "currentScore"
    //  2.c Create an empty array to save previous guesses, and store it in a global variable called "previousGuesses"
    //  2.d Start a timer using javascript, store & update the result as seconds in a global variable called "gameClock"

    // 3.  Display a prompt:  "Guess who ate the pie?  Enter initials only."
    //  3.a If the value matches a previous guess, display an alert: "You already guessed that!"
    //  3.b If the value matches no initials, display an alert: "No matching student found."
    //  3.c If a matching student is found who has not already been guessed, compare their ID to "rightAnswer"
    //    3.c.1  If the ID is equal to "rightAnswer", display an alert "You win with a score of [currentScore] in [gameClock] seconds!"
    //    3.c.2  If the ID is not equal:
    //      3.c.2.a Reduce "currentScore" by 1
    //      3.c.2.b Add the incorrect student to "previousGuesses"
    //      3.c.2.c Display an alert: "Wrong!  Find the pie!"
    //      3.c.2.d Repeat step 3
    //
    //
    // 4.  If "gameClock" hits 20 seconds:
    //  4.1 Display an alert: "Sorry, you lost without finding pie.  Please try again."
    //  4.2 Restart the game by resetting to step 2
    //
    // 5.  Allow the game to be restarted at any time by typing "restart()" in the console.
