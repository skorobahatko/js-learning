// - создать массив с 20 числами.

let arrayOfNumbers = [1, 34, 756, 230, 124, 356, 123, 12, 4, 7, 9, 234, 350, 234, 50, 78, 91, 5, 3240];

// -- при помощи метода sort отсортировать массив.

// let sortNumbers = arrayOfNumbers.sort((a, b) => a - b);
// console.log (sortNumbers);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sortCallNumbers = arrayOfNumbers.sort((a, b) => b - a);
// console.log (sortCallNumbers);

// -- при помощи filter получить числа кратные 3

// let filterNumbers = arrayOfNumbers.filter((number) => {
//     if (number % 3 === 0) {
//         return number;
//     }
// }) ;
// console.log (filterNumbers);

// -- при помощи filter получить числа кратные 10

// let filterNumbers10 = arrayOfNumbers.filter((number) => {
//     if (number % 10 === 0) {
//         return number;
//     }
// });
// console.log (filterNumbers10);

// -- перебрать (проитерировать) массив при помощи foreach()

// let forEachNumbers = arrayOfNumbers.forEach((number) => {
//     console.log (number);
// });
// console.log (forEachNumbers);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let mapNumbers = arrayOfNumbers.map((value) => {
//     return value * 3;
// });
// console.log (mapNumbers);

// - создать массив со словами на 15-20 элементов.

let arrayOfWords = ['Max', 'Vika', 'Taras', 'Iva', 'Vlad', 'Andriy', 'Denya', 'Chashka', 'Voda', 'Banana', 'Phone',
'Laptop', 'Tea', 'Water', 'Time'];

// -- отсортировать его по алфавиту в восходящем порядке.

// let alphabetWords = arrayOfWords.sort((a, b) => {
//     if (a < b) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log (alphabetWords);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let alphabetWords = arrayOfWords.sort((a, b) => {
//     if (a > b) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log (alphabetWords);

// -- отфильтровать слова длиной менее 4х символов

// let filterAlphabet = arrayOfWords.filter((value) => {
//     if (value.length < 4) {
//         return value;
//     }
// });
// console.log (filterAlphabet);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со
// знаком "!" в конце

// let mapAlphabet = arrayOfWords.map(value => value + ' !'
// );
// console.log (mapAlphabet);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {
        name: 'vasya',
        age: 31,
        status: false
    }, {
        name: 'petya',
        age: 30,
        status: true
    }, {
        name: 'kolya',
        age: 29,
        status: true
    }, {
        name: 'olya',
        age: 28,
        status: false
    }, {
        name: 'max',
        age: 30,
        status: true
    }, {
        name: 'anya',
        age: 31,
        status: false
    }, {
        name: 'oleg',
        age: 28,
        status: false
    }, {
        name: 'andrey',
        age: 29,
        status: true
    }, {
        name: 'masha',
        age: 30,
        status: true
    }, {
        name: 'olya',
        age: 31,
        status: false
    }, {
        name: 'max',
        age: 31,
        status: true
    } ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let ageUser = users.sort((a,b) => a.age - b.age);
// console.log (ageUser);

// let ageUser = users.sort((a,b) => b.age - a.age);
// console.log (ageUser);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let numbersOfZnak = users.sort((a,b) => a.name.length - b.name.length);
// console.log (numbersOfZnak);

// let numbersOfZnak = users.sort((a,b) => b.name.length - a.name.length);
// console.log (numbersOfZnak);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let usersJson = JSON.parse(JSON.stringify(users));
// usersJson.map(currentValue => {
//     currentValue.id = Math.floor(Math.random() * 20)
//     return currentValue;
// });
// let showUsers = usersJson.sort((a, b) => a.id - b.id);
// console.log (showUsers);

//
// -- наисать функцию калькулятора с 2мя числами и колбеком

// let aa = +prompt('Number 1');
// let bb = +prompt('Number 2');
// let calculator = function (a, b, callback) {
//     console.log (a + ' + ' + b + ' = ' + callback(a, b));
// };
// calculator(aa, bb, function (a, b) { return a + b });


// -- наисать функцию калькулятора с 3мя числами и колбеком

// let aa = +prompt('Number 1');
// let bb = +prompt('Number 2');
// let cc = +prompt('Number 3');
// let calculator = function (a, b, c, callback) {
//     console.log (a + ' + ' + b + ' + ' + c + ' = ' + callback(a, b, c));
// };
// calculator(aa, bb, cc, function (a, b, c) { return a + b + c });

//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
    {
        producer: "subaru" ,
        model: "wrx" ,
        year: 2010 ,
        color: "blue" ,
        type: "sedan" ,
        engine: "ej204x" ,
        volume: 2 ,
        power: 400
    } , {
        producer: "subaru" ,
        model: "legacy" ,
        year: 2007 ,
        color: "silver" ,
        type: "sedan" ,
        engine: "ez30" ,
        volume: 3 ,
        power: 250
    } , {
        producer: "subaru" ,
        model: "tribeca" ,
        year: 2011 ,
        color: "white" ,
        type: "jeep" ,
        engine: "ej20" ,
        volume: 2 ,
        power: 300
    } , {
        producer: "subaru" ,
        model: "leone" ,
        year: 1998 ,
        color: "yellow" ,
        type: "sedan" ,
        engine: "ez20x" ,
        volume: 2 ,
        power: 140
    } , {
        producer: "subaru" ,
        model: "impreza" ,
        year: 2014 ,
        color: "red" ,
        type: "sedan" ,
        engine: "ej204x" ,
        volume: 2 ,
        power: 200
    } , {
        producer: "subaru" ,
        model: "outback" ,
        year: 2014 ,
        color: "red" ,
        type: "hachback" ,
        engine: "ej204" ,
        volume: 2 ,
        power: 165
    } , {
        producer: "bmw" ,
        model: "115" ,
        year: 2013 ,
        color: "red" ,
        type: "hachback" ,
        engine: "f15" ,
        volume: 1.5 ,
        power: 120
    } , {
        producer: "bmw" ,
        model: "315" ,
        year: 2010 ,
        color: "white" ,
        type: "sedan" ,
        engine: "f15" ,
        volume: 1.5 ,
        power: 120
    } , {
        producer: "bmw" ,
        model: "650" ,
        year: 2009 ,
        color: "black" ,
        type: "coupe" ,
        engine: "f60" ,
        volume: 6 ,
        power: 350
    } , {
        producer: "bmw" ,
        model: "320" ,
        year: 2012 ,
        color: "red" ,
        type: "sedan" ,
        engine: "f20" ,
        volume: 2 ,
        power: 180
    } , {
        producer: "mercedes" ,
        model: "e200" ,
        year: 1990 ,
        color: "silver" ,
        type: "sedan" ,
        engine: "eng200" ,
        volume: 2 ,
        power: 180
    } , {
        producer: "mercedes" ,
        model: "e63" ,
        year: 2017 ,
        color: "yellow" ,
        type: "sedan" ,
        engine: "amg63" ,
        volume: 3 ,
        power: 400
    } , {
        producer: "mercedes" ,
        model: "c250" ,
        year: 2017 ,
        color: "red" ,
        type: "sedan" ,
        engine: "eng25" ,
        volume: 2.5 ,
        power: 230
    } ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let carEngineFilter = cars.filter(engine => engine.volume > 3);
// console.log (carEngineFilter);

// - двигун = 2л

// let carEngineFilter = cars.filter(engine => engine.volume > 2);
// console.log (carEngineFilter);

// - виробник мерс

// let carMersFilter = cars.filter(mers => mers.producer === "mercedes");
// console.log (carMersFilter);

// - двигун більше 3х літрів + виробник мерседес

// let carEngineMersFilter = cars.filter(engine => {
//     if (engine.volume > 3 && engine.producer === "mercedes") {
//         return engine
//     }
// });
// console.log (carEngineMersFilter);

// - двигун більше 3х літрів + виробник субару

// let carEngineSubaruFilter = cars.filter(engine => {
//     if (engine.volume > 3 && engine.producer === "subaru") {
//         return engine
//     }
// });
// console.log (carEngineSubaruFilter);

// - сили більше ніж 300

// let carPower = cars.filter(power => power.power > 300);
// console.log (carPower);

// - сили більше ніж 300 + виробник субару

// let carPowerSubaruFilter = cars.filter(power => {
//     if (power.power > 300 && power.producer === "subaru") {
//         return power
//     }
// });
// console.log (carPowerSubaruFilter);

// - мотор серіі ej

// let carEngineEj = cars.filter(car => car.engine.startsWith('ej'));
// console.log (carEngineEj);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let carEngineSubaruFilter = cars.filter(car => {
//    if (car.power > 300 && car.producer === "subaru"){
//        return car
//    }
// });
// console.log (carEngineSubaruFilter);

// - двигун меньше 3х літрів + виробник мерседес

// let carEngineMersFilter = cars.filter(car => {
//     if (car.volume < 3 && car.producer === "mercedes") {
//      return car
//     }
// });
// console.log (carEngineMersFilter);

// - двигун більше 2л + сили більше 250

// let carEnginePower = cars.filter(car => {
//     if (car.volume > 2 && car.power > 250) {
//         return car
//     }
// });
// console.log (carEnginePower);

// - сили більше 250  + виробник бмв

// let carPowerBmw = cars.filter(car => {
//     if (car.power > 250 && car.producer === "bmw") {
//         return car
//     }
// });
// console.log (carPowerBmw);

//
//
//
// - взять слдующий массив
// let usersWithAddress = [
//     {
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     }, {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 1
//         }
//     }, {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 121
//         }
//     }, {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 90
//         }
//     }, {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 115
//         }
//     }, {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 2
//         }
//     }, {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 22
//         }
//     }, {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 43
//         }
//     }, {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 12
//         }
//     }, {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     }, {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 121
//         }
//     } ];
// -- отсортировать его по id пользователей

// let sortById = usersWithAddress.sort((a,b) => a.id - b.id);
// console.log (sortById);

// -- отсортировать его по id пользователей в обратном опрядке

// let sortByIdReverse = usersWithAddress.sort((a,b) => b.id - a.id);
// console.log (sortByIdReverse);

// -- отсортировать его по возрасту пользователей

// let sortByAge = usersWithAddress.sort((a,b) => a.age - b.age);
// console.log (sortByAge);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sortByAgeReverse = usersWithAddress.sort((a,b) => b.age - a.age);
// console.log (sortByAgeReverse);

// -- отсортировать его по имени пользователей

// let sortByName = usersWithAddress.sort((a,b) => {
//     if (a.name < b.name) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log (sortByName);

// -- отсортировать его по имени пользователей в обратном порядке

// let sortByNameReverse = usersWithAddress.sort((a,b) => {
//     if (a.name > b.name) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log (sortByNameReverse);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sortByAdress = usersWithAddress.sort((a,b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log (sortByAdress);

// -- отсортировать его по номеру дома по возрастанию

// let sortByAdressNumber = usersWithAddress.sort((a,b) => a.address.number - b.address.number);
// console.log (sortByAdressNumber);

// -- отфильтровать (оставить) тех кто младше 30

// let filterAge30 = usersWithAddress.filter(agee => agee.age < 30);
// console.log (filterAge30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filterStatusFalse = usersWithAddress.filter(user => user.status === false);
// console.log (filterStatusFalse);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterAge30False = usersWithAddress.filter(user => {
//     if (user.status === false && user.age < 30) {
//         return user
//     }
// });
// console.log (filterAge30False);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filterByNumberOfHouse = usersWithAddress.filter(user => {
//     if (user.address.number % 2 === 0) {
//         return user
//     }
// });
// console.log (filterByNumberOfHouse);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
    let arr = [1, 2, 5, 10, 15, 15, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function findIndex (array, numberForIndex) {
    let arrayToShow = array.sort ((a, b) => a - b);
    console.log (array);
    let maxIndex = array.lastIndexOf(numberForIndex);
    let minIndex = array.indexOf(numberForIndex);
    return minIndex + ',' + maxIndex
}

console.log (findIndex(arr, 15));
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
