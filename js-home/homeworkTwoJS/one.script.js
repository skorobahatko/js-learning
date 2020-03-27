let arrayOne = [2,17,13,6,22,31,45,66,100,-18];

// виведення while
// let one = 0;
// while (one < arrayOne.length) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
//     one++
// }
//
// виведення for
// for (let one = 0; one < arrayOne.length; one++) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
// }
//
// непарний індекс while
// let one = 0;
// while (one < arrayOne.length) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
//     one+=2;
// }
//
// непарний індекс for
// for (let one = 0; one < arrayOne.length; one+=2) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
// }
// парне значення while
// let one = 0;
// while (one < arrayOne.length) {
//     if (arrayOne[one] % 2 === 0) {
//         document.write(arrayOne[one]);
//         document.write('<br>');
//     }
//     one++;
// }
//
// парне значення for
// for (let one = 0; one < arrayOne.length; one++) {
//     if (arrayOne[one] % 2 === 0) {
//         document.write(arrayOne[one]);
//         document.write('<br>');
//     }
// }
// заміна на okten
// for (let one = 0; one < arrayOne.length; one++) {
//     if (arrayOne[one] % 3 === 0) {
//         arrayOne[one] = 'okten';
//     }
//     document.write(arrayOne[one]);
//     document.write('<br>');
// }
//
// У ЗВОРОТН ПОРЯДКУ
//
// виведення while
// let one = arrayOne.length - 1;
// while (one >= 0) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
//     one--;
// }
///
// виведення for
// for (let one = arrayOne.length - 1; one >= 0; one--) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
// }
//
// непарний індекс while
// let one = arrayOne.length - 1;
// while (one >= 0) {
//     document.write(arrayOne[one]);
//     document.write('<br>');
//     one-=2;
// }
//
// непарний індекс for
for (let one = arrayOne.length - 1; one >= 0; one-=2) {
    document.write(arrayOne[one]);
    document.write('<br>');
}
//
//
// парне значення while
// let one = arrayOne.length - 1;
// while (one >= 0) {
//     if (arrayOne[one] % 2 === 0) {
//         document.write(arrayOne[one]);
//         document.write('<br>');
//     }
//     one--;
// }
//
// парне значення for
//
// for (let one = arrayOne.length - 1; one >= 0; one--) {
//     if (arrayOne[one] % 2 === 0) {
//         document.write(arrayOne[one]);
//         document.write('<br>');
//     }
// }
//
// заміна на okten
// for (let one = arrayOne.length - 1; one >= 0; one--) {
//     if (arrayOne[one] % 3 === 0) {
//         arrayOne[one] = 'okten';
//     }
//     document.write(arrayOne[one]);
//     document.write('<br>');
// }

let arrayTwo = [ ];
// //
// // пустий масив -> заповнений 50 цифрами парними
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arrayTwo.push(i);
    }
}
document.write(arrayTwo);
//
//
//// пустий масив -> заповнений 50 цифрами непарними
// let i = 0;
// // //
// while (i <= 50) {
//     if (i % 2 !== 0) {
//         arrayTwo.push(i);
//     }
//     i++;
// }
// document.write(arrayTwo);

// math.random ?
// for (let i = 0; i <= 100; i++) {
//     arrayTwo.push(Math.round(Math.random() * 732));
// }
// document.write(arrayTwo);
//
// цикл для наступних завдань:
// let i = 0;
// // //
// while (i <= 50) {
//     arrayTwo.push(i);
//     i++;
// }
// document.write(arrayTwo);
//
// кожен 3-й
// for (let j = 0; j <= arrayTwo.length; j+=3) {
//         console.log(arrayTwo[j]);
// }
//
// кожен 3-й парний
// for (let j = 0; j <= arrayTwo.length; j+=3) {
//     if (arrayTwo[j] % 2 === 0) {
//         console.log(arrayTwo[j]);
//     }
// }
//
// кожен 3-й парний записаний в масив
// let arrayThree = [];
// for (let j = 0; j <= arrayTwo.length; j+=3) {
//     if (arrayTwo[j] % 2 === 0) {
//         arrayThree.push(arrayTwo[j]);
//         console.log(arrayThree);
//     }
// }
//
// сусід зправа парний
//
// for (let j = 0; j < arrayTwo.length; j++) {
//     if ((arrayTwo[j] + 1) % 2 === 0) {
//         console.log(arrayTwo[j]);
//     }
// }
//
//
// середній чек
// let arrayFour = [100,250,50,168,120,345,188];
// let suma = 0;
// for (let i = 0; i < arrayFour.length; i++) {
//     suma += arrayFour[i];
// }
// console.log(suma);
//
//
// помножити на 5 і в інший масив
// let arrayFive = [1340,20,290,165,920,3,8];
// let arrayFiveNew = [];
// for (let i = 0; i < arrayFive.length; i++) {
//     arrayFiveNew.push(arrayFive[i] *= 5);
// }
// console.log(arrayFiveNew);
//
// відсіювання чисел з масиву і додавання в інший
// let arraySix = ['hello', 23, 'im your father', 65, 'im come back'];
// let arraySixNew = [];
// for (let i = 0; i < arraySix.length; i++) {
//     if (typeof arraySix[i] == "number") {
//         arraySixNew.push(arraySix[i]);
//     }
// }
//
//
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// let arrayNumbers = [12, 14, 16, 1, 5];
// console.log(arrayNumbers);
// - з 5 стічкових значень
// let arrayOneStrings = ['hello', 'hallo', 'yo', 'yes', 'da'];
// console.log(arrayOneStrings);
// - з 5 значень стрічкового, числового та булевого типу
// let arrayOneNumStringBool = [12, 14,'yo', true, false, 'ya'];
// console.log(arrayOneNumStringBool);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrayTwo = [];
// arrayTwo[0] = 1;
// arrayTwo[2] = 'lol';
// arrayTwo[1] = 'kek';
// arrayTwo[3] = 456;
// console.log(arrayTwo);
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let objectDog = {
//     lags: 4,
//     eyes: 2,
//     teeth: 30,
//     tail: 1,
//     ears: 2
// }
// let objectHuman = {
//     lags: 2,
//     eyes: 2,
//     hands: 2,
//     nose: 1,
//     teeth: 32
// }
// let objectCar = {
//     wheels: 4,
//     seats: 4,
//     engine: 1,
//     helm: 1.
//     driver: 1
// }
// let objectFlat = {
//     bathroom: 1,
//     toilet: 1,
//     doors: 4,
//     rooms: 3,
//     windows: 3
// }
// let objectBook = {
//     pages: 326,
//     author: 'King',
//     cover: 'solid',
//     color: 'gradient'
//     condition: 'used'
// }
//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// let arrayDog = ['dog one', 'dog two', 'dog three', 'dog four', 'dog five'];
// console.log(arrayDog);
// - 3 5 людей
// let arrayHuman = ['max', 'vika', 'oleksa', 'ivan', 'vlad'];
// console.log(arrayHuman);
// - з 5 автомобілів
// let arrayCars = ['car1', 'car2', 'car3', 'car4', 'car5'];
// console.log(arrayCars);
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//

//
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);
// - статус Максима
// console.log(users[4].status);
// - ім'я передостаннього об'єкту
// console.log(users[users.length -2].name );
// - ім'я третього об'єкта
// console.log(users[2].name);
// - вік Олега
// console.log(users[6].age);
// - вік Олі
// console.log(users[3].age);
// - вік + ім'я 5го об'єкта
// console.log(users[4].age, users[4].name);
// - вік + сатус Анни
// console.log(users[5].age, users[5].status);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл task2_template.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules.outerHTML);
// - замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = 'Hallo motherfucker!';
// - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = 'Here we go!';
// - змініть кожному елементу колір фону на червоний
// let bodyColor = document.getElementsByTagName('body');
// for (let i = 0; i < bodyColor.length; i++) {
//     bodyColor[i].style.color = 'red';
// }
// - змініть кожному елементу колір тексту на синій
// let bodyColor = document.getElementsByTagName('body');
// for (let i = 0; i < bodyColor.length; i++) {
//     bodyColor[i].style.color = 'blue';
// }
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rulesIdElements = document.getElementById('rules');
// console.log(rulesIdElements);
// - отримати всі елементи з класом fc_rules
// let getByClassName = document.getElementsByClassName('fc_rules');
// console.log(getByClassName);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < getByClassName.length; i++) {
//     getByClassName[i].style.color = 'red';
// }
//
//
// =================
// =====class=======
// =================
// Взяти файл task2_template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let mainHeaderColor = document.getElementById('main_header').style.color = 'blue';
//  -- робить шириниу елементу ul 400 пікселів
// let ulWidthSet = document.getElementsByTagName('ul');
// for (let i = 0; i < ulWidthSet.length; i++) {
//     ulWidthSet[i].style.width = '400px';
// }
//  -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkListWidth = document.getElementsByClassName('linkList');
// for (i = 0; i < linkListWidth.length; i++) {
//     linkListWidth[i].style.width = '50%';
// }
//  -- отримує текст який зберігається в елементі з класом listElement2
//  -- отримує всі елементи li та змінює ім колір фону на сірий
// let  liElementsColor = document.getElementsByTagName('li');
// for (i = 0; i < liElementsColor.length; i++) {
//     liElementsColor[i].style.backgroundColor = 'grey';
// }
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення