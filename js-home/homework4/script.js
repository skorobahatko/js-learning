// join split toLowerCase ToUpperCase startsWith endsWith includes
// - створити функцію яка виводить масив
// let arrayToLog = [];
// function arrayLog (array) {
//     document.write(array);
// }
// arrayLog(arrayToLog);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.ґ


// let arrayToLog = [];
// function randomNumbers (array) {
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//     arrayLog();
// }
// randomNumbers(arrayToLog);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function acceptNumber () {
//     let a = +prompt('Number one');
//     let b = +prompt('Number two');
//     let c = +prompt('Number three');
//     if (a < b && a < c) {
//         document.write(`Number ${a} is very low`);
//         return a;
//     } else if (b < a && b < c) {
//         document.write(`Number ${b} is very low`);
//         return b;
//     } else if (c < a && c < b) {
//         document.write(`Number ${c} is very low`);
//         return c;
//     } else if (a === b || a === c || b === c || b === a ) {
//         document.write(`Type different numbers`);
//     }
// }
//  acceptNumber();

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function acceptNumber () {
//     let a = +prompt('Number one');
//     let b = +prompt('Number two');
//     let c = +prompt('Number three');
//     if (a > b && a > c) {
//         document.write(`Number ${a} is very big`);
//         return a;
//     } else if (b > a && b > c) {
//         document.write(`Number ${b} is very big`);
//         return b;
//     } else if (c > a && c > b) {
//         document.write(`Number ${c} is very big`);
//         return c;
//     } else if (a === b || a === c || b === c || b === a ) {
//         document.write(`Type different numbers`);
//     }
// }
// acceptNumber();

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// пропустив, потім зроблю

// - створити функцію яка виводить масив

// let arrayToLog = [];
// function arrayLog (array) {
//     document.write(array);
// }
// arrayLog(arrayToLog);

// - створити функцію яка повертає найбільше число з масиву

// let arrayToLog = [21, 1, 546, 12, 445];
//
// function maxValueNumber(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) max = array[i];
//     }
//     console.log(max);
//     return max;
// }
//
// maxValueNumber(arrayToLog);

// - створити функцію яка повертає найменьше число з масиву

// let arrayToLog = [1, 2, 3, 4, 5, 6];
//
// function maxValueNumber(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max > array[i]) max = array[i];
//     }
//     console.log(max);
//     return max;
// }
//
// maxValueNumber(arrayToLog);

// - створити функцію яка приймає масив чисел

// function acceptNumbers (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             console.log(array[i]);
//         } else {
//             break;
//         }
//     }
//
// }
// acceptNumbers(arrayToLog);


// - створити функцію яка скаладає значення елементів масиву та повертає його.

// function arrayElementsSum (array) {
//     let sumElement = 0;
//     for (let element of array) {
//         sumElement = sumElement + element;
//     }
//     console.log(sumElement);
//     return sumElement;
// }
//
// arrayElementsSum(arrayToLog);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averageArithmetic (array) {
//     let sumElement = 0;
//     for (let element of array) {
//         sumElement = sumElement + element;
//     }
//     sumElement = Math.floor(sumElement / array.length);
//     console.log(sumElement);
//     return sumElement;
// }
//
// averageArithmetic(arrayToLog);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let arrayCars = [
    {model: 'BMW', year: 2011, power: 300, color: 'blue'},
    {model: 'Volkswagen', year: 2014, power: 320, color: 'red'},
    {model: 'Mersedes-Benz', year: 2015, power: 400, color: 'black'},
    {model: 'Renault', year: 2010, power: 330, color: 'blue'},
    {model: 'Volvo', year: 2012, power: 350, color: 'blue'},
    {model: 'Opel', year: 2011, power: 300, color: 'blue'},
    {model: 'Porsche', year: 2009, power: 500, color: 'blue'},
    {model: 'Jeep', year: 2009, power: 400, color: 'blue'},
    {model: 'Volvo', year: 2001, power: 200, color: 'blue'},
    {model: 'BMW', year: 2002, power: 250, color: {name: 'Max', years: 19}}
];
//
function arrayNumberObject(array) {
    return array.length;
}

console.log(arrayNumberObject(arrayCars));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function arrayNumberObjectKeys (array) {
    let arr = 0;
    for (let i = 0; i< array.length; i++) {
        arr = arr + Object.keys(array[i]).length;
    }
    return arr;
}

console.log(arrayNumberObjectKeys(arrayCars));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
//
// let sumArray = [];
// function arraySum(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         sumArray.push(array1[i] + array2[i]);
//     }
//     console.log(sumArray)
//     return sumArray;
// }
//
// arraySum(arr1, arr2);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arrayToLog = [1, 2, 3, 4, 5, 6];
//
// function replaceElement (array, i) {
//     array.splice(i, 2, array[i + 1], array[i] );
//     return array;
// }
//
// console.log(replaceElement(arrayToLog, 0));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// let arr0 = [0,0,1,0];
// let arr1 = [0,1,2,3,4];
// // [0,0,1,0]   => [1,0,0,0]
//
// function zeroToEnd (array) {
//     let arrayForZeros = [];
//     let arrayToConcat = [];
//     for (let arrayElement of array) {
//         if (arrayElement === 0) {
//             arrayForZeros.push(arrayElement);
//         } else {
//             arrayToConcat.push(arrayElement);
//         }
//     }
//     let final = arrayToConcat.concat(arrayForZeros);
//     console.log(final);
//     return final;
// }
//
// zeroToEnd(arr0);

//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function addBlockHello () {
//     let hello = document.createElement('div');
//     hello.innerText = 'Hello owu!';
//     document.body.appendChild(hello);
// }
//
// addBlockHello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addBlockHello (type, text) {
//     let hello = document.createElement(type);
//     hello.innerText = text;
//     document.body.appendChild(hello);
// }
//
// addBlockHello('div', 'hal');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let arrayCars = [
//     {model: 'BMW', year: 2011, power: 300, color: 'blue'},
//     {model: 'Volkswagen', year: 2014, power: 320, color: 'red'},
//     {model: 'Mersedes-Benz', year: 2015, power: 400, color: 'black'},
//     {model: 'Renault', year: 2010, power: 330, color: 'blue'},
//     {model: 'Volvo', year: 2012, power: 350, color: 'blue'},
//     {model: 'Opel', year: 2011, power: 300, color: 'blue'},
//     {model: 'Porsche', year: 2009, power: 500, color: 'blue'},
//     {model: 'Jeep', year: 2009, power: 400, color: 'blue'},
//     {model: 'Volvo', year: 2001, power: 200, color: 'blue'},
//     {model: 'BMW', year: 2002, power: 250, color: 'blue'}
// ];

// let idContainer = document.createElement('div');
// idContainer.id = 'car1';
// function addCars (array, id) {
//     for (let carOne of array) {
//         let idCar = document.createElement('div');
//         idCar.classList = 'car';
//         idCar.innerText = Object.values(carOne);
//         id.appendChild(idCar);
//     }
// }
// document.body.appendChild(idContainer);
// addCars(arrayCars, idContainer);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let idContainer = document.createElement('div');
// idContainer.id = 'car1';
// function addCars (array, id) {
//     for (let carOne of array) {
//         let idCar = document.createElement('div');
//         for (let carOneKey in carOne) {
//             let classCar = document.createElement('div');
//             classCar.innerText = carOne[carOneKey];
//             idCar.appendChild(classCar);
//         }
//         id.appendChild(idCar);
//     }
// }
// document.body.appendChild(idContainer);
// addCars(arrayCars, idContainer);

//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
//
//
//
//
