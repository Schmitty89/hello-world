function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
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
var rightAnswer = getRandomInt(0, 9);
var firstInitial = students[rightAnswer].firstname[0];
var lastInitial = students[rightAnswer].lastname[0];
console.log(rightAnswer);

// function studentCall() {
//     for (i = 0; i < students.length; i++) {
//         if (rightAnswer === students[i].firstname[0]) {
//             if (rightAnswer === students[i].lastname[0]) {
//                 window.alert("YAY, rush got his pie back!")
//             }
//         }
//     };
//     window.alert("Guess Again Hes really hungry")
//
//
//     setTimeout(function() {
//         alert("That dick ate the pie, YOU FAILED!!!");
//     }, 20000);
// function getElementById('students')
// setTimeout(function () {
//
//   function gameDialogue() { alert("Guess again! He's hungry!")
//
// };
// setInterval (function() { window.alert("sorry you lost")} 2000);
