// join split toLowerCase ToUpperCase startsWith endsWith includes
// - створити функцію яка виводить масив
// let arrayToLog = [];
// function arrayLog () {
//     document.write(arrayToLog);
// }
// arrayLog();

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

// function acceptNumber () {
//     let a = +prompt('Number one');
//     let b = +prompt('Number two');
//     let c = +prompt('Number three');
//     if (a > b && a > c) {
//         document.write(`Number ${a} is very big`);               ??????
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
//
// }
// acceptNumber();

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

let arrayToLog = [21, 1, 546, 12, 445];
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

function averageArithmetic (array) {
    let sumElement = 0;
    for (let element of array) {
        sumElement = sumElement + element;
    }
    sumElement = sumElement / array.length;
    console.log(sumElement);
    return sumElement;
}

averageArithmetic(arrayToLog);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
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
