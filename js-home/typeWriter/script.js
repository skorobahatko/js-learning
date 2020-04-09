
let createDiv = document.createElement('div');
document.body.appendChild(createDiv);
let getText = prompt();
let arrayWords = getText.split('');

// let write = function () {
//     document.write(arrayWords[i]);
//     document.write(' ');
// };

let i = 0;
let ai = setInterval(function () {
    document.write(arrayWords[i]);
    i++
    if (i >= arrayWords.length) {
        clearInterval(ai, 10);
    }
}, 400);

// let aa = function a () {
//     for (let i = 0; i < arrayWords.length; i++) {
//         setInterval(function () {
//             document.write(arrayWords[i]);
//             document.write(' ');
//         }, 1000)
//     };
// };
// aa();



// let setTimer = function () {
//     for (let i = 0; i < arrayWords.length; i++) {
//         setInterval(function () {
//             document.write(arrayWords[i]);
//         }, 1000);
//     }
// };
