// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// let arrayNumber = [1, 3, 5, 32, 12];
// console.log(arrayNumber);
// - з 5 стічкових значень
// let arrayString = ['hello', 'world', 'im', 'here', 'now'];
// console.log(arrayString);
// - з 5 значень стрічкового, числового та булевого типу
// let arrayCombo = [1, 3, 'world', 'im', true];
// console.log(arrayCombo);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = [];
// emptyArray[0] = 246;
// emptyArray[1] = 'true';
// emptyArray[2] = false;
// console.log(emptyArray);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hello World im here! </div>`);
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hallo here ${i}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1> Its cycle While 1 </h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1> Its cycle While ${i}</h1>`);
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNumber = [1, 3, 4, 6, 7, 8, 9, 2, 5, 10];
// for (let i = 0; i < arrayNumber.length; i++) {
//     console.log(arrayNumber[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayString = ['hello', 'bonjurno', 'pruvit', 'how', 'are', 'you', 'i', 'miss', 'you', 'a lot'];
// for (let i = 0; i < arrayString.length; i++) {
//     console.log(arrayString[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrayCombo = [1, 3, 4, 6, 7, 'bonjurno', 'pruvit', 'are', true, false];
// for (let i = 0; i < arrayCombo.length; i++) {
//     console.log(arrayCombo[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayCombo = [1, 3, 4, 6, 7, 'bonjurno', 'pruvit', 'are', true, false];
// for (let i = 0; i < arrayCombo.length; i++) {
//     if (typeof arrayCombo[i] === 'boolean') {
//         console.log(arrayCombo[i]);
//     }
// }
// for (let j = 0; j < arrayCombo.length; j++) {
//     if (typeof arrayCombo[j] === 'number') {
//         console.log(arrayCombo[j]);
//     }
// }
// for (let o = 0; o < arrayCombo.length; o++) {
//     if (typeof arrayCombo[o] === 'string') {
//         console.log(arrayCombo[o]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArrayOne = [];
// emptyArrayOne[0] = 'Coca-cola';
// emptyArrayOne[1] = 'Sprite';
// emptyArrayOne[2] = 'Fanta';
// emptyArrayOne[3] = 666;
// emptyArrayOne[4] = 'tea';
// emptyArrayOne[5] = 2488;
// emptyArrayOne[6] = true;
// emptyArrayOne[7] = 'Cocain';
// emptyArrayOne[8] = 987;
// emptyArrayOne[9] = false;
// for (let i = 0; i < emptyArrayOne.length; i++) {
//     console.log(emptyArrayOne[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`step ${i}`);
//     document.write(`step ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`step ${i}`);
//     document.write(`step ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i+=2) {
//     console.log(`step ${i}`);
//     document.write(`step ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`step ${i}`);
//         document.write(`step ${i} <br>`);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`step ${i}`);
//         document.write(`step ${i} <br>`);
//     }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let second = 0;
// let minute = 0;
// let hour = 0;
//
// for (minute = 0; minute <= 2; minute++) {
//     for (second = 0; second < 60; second++) {
//         if (minute === 0) {
//             document.write(`${second} seconds <br>`);
//         } else if (minute === 2 && second === 1) {
//             break;
//         } else if (minute === 1 && second === 0) {
//             document.write(`${minute} minute <br>`);
//         } else if (second <= 60) {
//             document.write(`${minute} minute ${second} second <br>`);
//         }
//     }
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

//
// for (hour = 0; hour <= 2; hour++) {
//     for (minute = 0; minute < 60; minute++) {
//         for (second = 0; second < 60; second++) {
//             if (minute === 0 && hour === 0) {
//                 document.write(`${second} seconds <br>`);
//             } else if (hour === 0 && minute !== 0 && second === 0) {
//                 document.write(`${minute} minute <br>`);
//             } else if (hour === 0) {
//                 document.write(`${minute} minute ${second} second <br>`);
//             } else if (hour === 2 && minute === 20 && second === 1) {
//                 break;
//             } else if (hour !== 0 && minute !== 0 && second === 0) {
//                 document.write(`${hour} hour ${minute} minute <br>`);
//             } else if (hour !== 0) {
//                 document.write(`${hour} hour ${minute} minute ${second} second <br>`);
//             }
//         }
//         if (hour === 2 && minute === 20) {
//                 break;
//         }
//     }
// }



// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrayOne = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arrayOne.length; i++) {
//     word = word + arrayOne[i];
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < arrayOne.length) {
//     document.write(arrayOne[i]);
//     i++
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (let i of arrayOne) {
//     document.write(i);
// }
//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrayOne = [ 'a', 'b', 'c'];
//
// for (let i = 1; i < 4; i++) {
//     arrayOne.push(i);
// }
// console.log(arrayOne);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrayNotReversed = [1, 2, 3];
// let arrayReversed = arrayNotReversed.reverse();
// console.log(arrayReversed);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arrayNumberEnd = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
//     arrayNumberEnd.push(i);
// }
// console.log(arrayNumberEnd);
// for (let i = 6; i > 3; i--) {
//     arrayNumberEnd.unshift(i);
// }
// console.log(arrayNumberEnd);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arrayLanguages = ['js', 'css', 'jq'];
// console.log(arrayLanguages.shift());
// console.log(arrayLanguages.pop());
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1, 4, 5]. ???
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]. ????
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]. ????


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(3, 0, 'a', 'b', 'c');
// console.log(arrayNumbers);

// arrayNumbers.splice(1, 0, 'a', 'b');
// console.log(arrayNumbers);
//
// arrayNumbers.splice(6, 0, 'c');
// console.log(arrayNumbers);
//
// arrayNumbers.splice(8, 0, 'e');
// console.log(arrayNumbers);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrayNumbers = [125, 234, 1221, 12, 659, 4578, 28, 2, 975, 346];
// for (let j = 0; j < arrayNumbers.length; j++) {
//     if (arrayNumbers[j] % 2 === 0) {
//         console.log(arrayNumbers[j]);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arrayNumbers = [125, 234, 1221, 12, 659, 4578, 28, 2, 975, 346];
// let arrayEmpty = [];
// for (let i = 0; i < arrayNumbers.length; i++) {
//     arrayEmpty.push(arrayNumbers[i]);
// }
// console.log(arrayEmpty);
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// 2. вывести на консоль  каждый третий елемент
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
//
//
//
