// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//

// let textarea = document.getElementById('textarea');
// let textLocal = localStorage.getItem('text');
//
// if (textLocal) {
//     textarea.value = textLocal
// }
//
// textarea.oninput = () => {
//     let textareaValue = textarea.value;
//     localStorage.setItem('text', textareaValue);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//


// let textarea = document.getElementById('textarea1');
// let textLocal = localStorage.getItem('textarea');
// let input = document.getElementById('inp');
// let inputLocal = localStorage.getItem('input');
// let check = document.getElementById('checkbox');
// let checkLocal = localStorage.getItem('check');
// let radio = document.getElementById('radio');
// let radioLocal = localStorage.getItem('radio');
// let select = document.getElementById('select');
// let selectLocal = localStorage.getItem('select');
// let arrayForLocal = [textLocal, inputLocal, checkLocal, radioLocal, selectLocal];
// let arrayForDOM = [textarea, input, check, radio, select];
// let arrayOfKeys = ['textarea', 'input', 'check', 'radio', 'select'];
//
// for (let i = 0; i < arrayForLocal.length; i++) {
//     if (arrayForLocal[i] === checkLocal || arrayForLocal[i] === radioLocal ) {
//         arrayForDOM[i] = check.checked;
//         arrayForDOM[i] = radio.checked;
//     } else if (arrayForLocal[i]) {
//         arrayForDOM[i].value = arrayForLocal[i];
//     }
// }
// for (let i = 0; i < arrayForDOM.length; i++) {
//     if (arrayForDOM[i] === check || arrayForDOM[i] === radio) {
//         arrayForDOM[i].onclick = () => {
//             localStorage.setItem (arrayOfKeys[i], 'checked')
//         }
//     } else {
//         arrayForDOM[i].oninput = () => {
//             let domElement = arrayForDOM[i].value;
//             localStorage.setItem (arrayOfKeys[i], domElement);
//         }
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//


const area = document.getElementById('area');
const btn = document.getElementById('save');
let arrayOfLocal = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

if (arrayOfLocal) {
    area.value = arrayOfLocal[arrayOfLocal.length - 1];
}

let btnLeft = document.createElement('button');
btnLeft.innerText = '<=';
let btnRight = document.createElement('button');
btnRight.innerText = '=>';
document.body.appendChild(btnLeft);
document.body.appendChild(btnRight);

btnLeft.onclick = () => {
    for (let i = 1; i < arrayOfLocal.length; i++) {
        if (arrayOfLocal[i] === area.value) {
            area.value = arrayOfLocal[i-1]
        }
    }
};
btnRight.onclick = () => {
    for (let j = 1; j < arrayOfLocal.length - 1; j++) {
        if (arrayOfLocal[j] === area.value) {
            area.value = arrayOfLocal[j+1];
            console.log (arrayOfLocal[j+1]);
        }
    }
};

btn.onclick = () => {
    arrayOfLocal.push(area.value);
    localStorage.setItem('items', JSON.stringify(arrayOfLocal));
};


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let contactCreate = document.getElementById('contact');
// let checkInputs = document.getElementsByClassName('contactChildren');
// checkInputs.oninput = () => {
//     let arrOfContact = [];
//     if (checkInputs.value) {
//         arrOfContact.push(JSON.stringify(checkInputs.value));
//         console.log (arrOfContact)
//     }
// }
