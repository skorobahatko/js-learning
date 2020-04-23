// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let idText = document.createElement('div');
// idText.id = 'text';
// idText.style.height = '100px';
// idText.style.width = '100px';
// idText.style.backgroundColor = 'black';
// document.body.appendChild(idText);
// let btn = document.createElement('button');
// btn.innerText = 'button';
// document.body.appendChild(btn);
// btn.onclick = function () {
//     idText.style.display = 'none';
// };

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let selfBtn = document.createElement('button');
// selfBtn.innerText = 'catch me if u can';
// selfBtn.onclick = function () {
//     selfBtn.style.display = 'none'
// };
// document.body.appendChild(selfBtn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let ageInput = document.createElement('input');
// ageInput.name = 'age';
// ageInput.type = 'text';
// document.body.appendChild(ageInput);
// let ageBtn = document.createElement('button');
// ageBtn.innerText = 'submit';
// document.body.appendChild(ageBtn);
// ageBtn.onclick = function () {
//     if (ageInput.value < 18) {
//         alert('stop doing it');
//     } else {
//         alert('all is good');
//     }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике

// let ul = document.createElement('ul');
// let li = document.createElement('li');
// ul.appendChild(li);
// li.innerText = 'menu';
// li.setAttribute('id' ,'first');
// let ulForMenu = document.createElement('ul');
// li.appendChild(ulForMenu);
// for (let i = 0; i < 5; i++) {
//     let lii = document.createElement('li')
//     ulForMenu.appendChild(lii);
//     lii.innerText = 'hello' + i;
// }
// li.onclick = ev => {
//     if (ulForMenu.style.visibility === 'hidden') {
//         ulForMenu.style.visibility = 'visible';
//     } else {
//         ulForMenu.style.visibility = 'hidden';
//     }
// }
// li.addEventListener("click", function () {
//     alert('what are u doing?');
// });
//
// document.body.appendChild(ul);


// копіює все що виділене і при натиску на кнопку консолить його
// let copy = document.getElementById('main-button');
// copy.onmousedown = e => {
//     let cop = window.getSelection().toString();
//     console.log (cop);
// };



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.



// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'larem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lirim', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorim', body:'lorem ipsum dolo sit ameti'},
//     {title : '2342', body:'lorem ipsum dolo sit ameti'},
//     {title : '46egf', body:'lorem ipsum dolo sit ameti'},
//     {title : 'dgfdg', body:'lorem ipsum dolo sit ameti'}
//     ];
// for (let comment of comments) {
//     let commentt = document.createElement('div');
//     commentt.innerText = JSON.stringify(comment);
//     let btn = document.createElement('button');
//     btn.innerText = 'clear';
//     commentt.appendChild(btn);
//     document.body.appendChild(commentt);
//     btn.onclick = function () {
//         commentt.innerText = '';
//     };
// }



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn1 = document.getElementById('btn1');
// btn1.innerText = 'console';
// let btn2 = document.getElementById('btn2');
// btn2.innerText = 'console';
// btn1.onclick = function () {
//     let getFormInput = document.form1.input1;
//     let getFormInpu = document.form1.input0;
//     console.log (getFormInpu.value + ' ' + getFormInput.value);
// };
// btn2.onclick = function () {
//     let getFormInput = document.form2.input2;
//     let getFormInpu = document.form2.input3;
//     console.log (getFormInput.value + ' ' + getFormInpu.value);
// };


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//

// let tableFunc = function (tr, td, element) {
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 0; i < tr; i++) {
//         let newTr = document.createElement('tr')
//         table.appendChild(newTr);
//         for (let i = 0; i < td; i++) {
//             let newTd = document.createElement('td');
//             newTd.innerText = element;
//             newTr.appendChild(newTd);
//         }
//     }
//
// };
// tableFunc(3,3, 'hallo');

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function createTable() {
//     let getTr = document.mainForm.tr.value;
//     let getTd = document.mainForm.td.value;
//     let getInfo = document.mainForm.element.value;
//     tableFunc(getTr, getTd, getInfo);
// };

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let photos = document.querySelectorAll('.carousel img');
// let now = 0;
// function slide () {
//     for (let i = 0; i < photos.length; i++) {
//         photos[i].style.opacity = '0';
//     }
//     photos[now].style.opacity = '1';
// }
// document.querySelector('.btn-left').onclick = function () {
//     if (now - 1 === -1) {
//         now = photos.length -1;
//     } else {
//         now--
//     }
//     slide()
// };
// document.querySelector('.btn-right').onclick = function () {
//     if (now + 1 === photos.length) {
//         now = 0;
//     } else {
//         now++
//     }
//     slide()
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// let badWords = ['word1', 'word2', 'word3'];
// let inputCreate = document.createElement('input');
// inputCreate.type = 'text';
// inputCreate.name = 'badWord';
// let checkBtn = document.createElement('button');
// checkBtn.innerText = 'search bad words';
// checkBtn.onclick = function () {
//     for (let badWord of badWords) {
//         if (inputCreate.value.includes(badWord)) {
//             alert('stop doing it!')
//         }
//     }
// };
// document.body.appendChild(inputCreate);
// document.body.appendChild(checkBtn);


//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает
//    сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//    При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//

// let getH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul = document.createElement('ul');
// for (let i = 0; i < getH2.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let yakor = 'yakor'+i;
//     a.href = '#'+yakor;
//     getH2[i].setAttribute('id' ,yakor);
//     a.innerHTML = getH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//

// let mbutton = document.getElementById('main-button');
// mbutton.onclick = function () {
//     console.log('hello');
// };
// mbutton.addEventListener('click', function () {
//     console.log('el click 1');
// });
// mbutton.addEventListener('click', function () {
//     console.log('el click 2');
// });

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в
// боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним
//     на одном уровне
//

let getElement = document.getElementById('first');
let startt = document.createElement('button');
document.body.appendChild (startt);
startt = () => {
    find(getElement)
};
let btnUp = document.createElement ('button');
btnUp.innerText = 'up';
let btnDown = document.createElement ('button');
btnDown.innerText = 'down';
document.body.appendChild (btnUp);
document.body.appendChild (btnDown);
let find = function (element) {
    btnUp.onclick = function (element) {
        if (element.children) {
            console.log (element.children)
            find (element.children)
        };
    };
};


//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let onmouseUp = document.getElementsByTagName('p');
// document.onmouseup = () => {
//     let mep = getSelection();
//     console.log (mep.toString());
// };

// function replaceSelectedText(replacementText) {
//     let sel, range;
//     let selectedText=window.getSelection().toString();
//     if ($.trim(selectedText)!= "") {
//         if (window.getSelection) {
//             sel = window.getSelection();
//             if (sel.rangeCount) {
//                 range = sel.getRangeAt(0);
//                 range.deleteContents();
//                 range.insertNode(document.createTextNode(replacementText));
//             }
//         } else if (document.selection && document.selection.createRange) {
//             range = document.selection.createRange();
//             range.text = replacementText;
//         }
//     }
// }


// document.onmouseup = function() {
//         let selectedText = '';
//         if (getSelection) {
//             let selection = window.getSelection();
//             selectedText = selection.toString();
//         } else if (document.selection) {
//             let range = document.selection.createRange();
//             selectedText = range.htmlText;
//         }
//
//         console.log(selectedText);
//     }

