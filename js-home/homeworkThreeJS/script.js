// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let objectOne = {
//     name0: 'Max',
//     age0: 19,
//     car0: false
// }
// let objectTwo = {
//     name1: 'Ivan',
//     age1: 15,
//     car1: false
// }
// let objectThree = {
//     name2: 'Taras',
//     age2: 40,
//     car2: true
// }
// let objectFour = {
//     name3: 'Vika',
//     age3: 19,
//     car3: false
// }
// let objectFive = {
//     name4: 'Vlad',
//     age4: 20,
//     car4: false
// }
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let human = {
//     name: 'Max',
//     car: {
//         model: 'BMW',
//         year: 5
//     },
//     skills: ['html', 'css', 'js']
// };
// let car = {
//     model: 'Mersedes-Benz',
//     year: 2015,
//     engine: {
//         capacity: '3 litres',
//         v: 'v12'
//     },
//     also: ['4 wheels', 'gas']
// };
// let house = {
//     rooms: 4,
//     year: 2020,
//     additionally: ['garage', 'car'],
//     beds: {
//         livingRoom: 2,
//         bedRoom: 3
//     }
// };
// let laptop = {
//     diagonal: 13,
//     model: 'MacBook',
//     OC: {
//         model: 'air',
//         processor: 'Intel Core I5'
//     },
//     also: [ 2011, 'keyboard', 'multitouch']
// };
// let kitchen = {
//     cups: 10,
//     folk: 10,
//     also: ['plate', 'microwave', 'coffee mashine'],
//     lighting: {
//         onTop: 4,
//         onBottom: 5
//     },
// };

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let keys in objectOne) {
//     console.log(keys);
// }
// for (let keys in objectTwo) {
//     console.log(keys);
// }
// for (let keys in objectThree) {
//     console.log(keys);
// }
// for (let keys in objectFour) {
//     console.log(keys);
// }
// for (let keys in objectFive) {
//     console.log(keys);
// }

///

// for (let keys in human) {
//     console.log(keys);
// }
// for (let keys in car) {
//     console.log(keys);
// }
// for (let keys in house) {
//     console.log(keys);
// }
// for (let keys in laptop) {
//     console.log(keys);
// }
// for (let keys in kitchen) {
//     console.log(keys);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keys = Object.keys(objectOne);
// console.log(keys);
// let keys1 = Object.keys(objectTwo);
// console.log(keys1);
// let keys2 = Object.keys(objectThree);
// console.log(keys2);
// let keys3 = Object.keys(objectFour);
// console.log(keys3);
// let keys4 = Object.keys(objectFive);
// console.log(keys4);

// let keys0 = Object.keys(human);
// console.log(keys0);
// let keys1 = Object.keys(car);
// console.log(keys1);
// let keys2 = Object.keys(house);
// console.log(keys2);
// let keys3 = Object.keys(laptop);
// console.log(keys3);
// let keys4 = Object.keys(kitchen);
// console.log(keys4);

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)

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

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     {name: 'Kyiv', population: 3000000, country: 'Ukraine', region: 'Kyiv region'},
//     {name: 'Lviv', population: 800000, country: 'Ukraine', region: 'Lviv region'},
//     {name: 'Kharkiv', population: 1000000, country: 'Ukraine', region: 'Kharkiv region'},
//     {name: 'Rivne', population: 500000, country: 'Ukraine', region: 'Rivne region'},
//     {name: 'New York', population: 15000000, country: 'USA', region: 'NYC'},
//     {name: 'Netishyn', population: 35000, country: 'Ukraine', region: 'Netishyn region'},
//     {name: 'Odessa', population: 800000, country: 'Ukraine', region: 'Odessa region'},
//     {name: 'Uzhgorog', population: 600000, country: 'Ukraine', region: 'Uzhgorod region'},
//     {name: 'Slavuta', population: 50000, country: 'Ukraine', region: 'Slavuta region'},
//     {name: 'Ostrog', population: 20000, country: 'Ukraine', region: 'Ostrog region'}
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars = [
//     {model: 'BMW', year: 2011, power: 300, color: 'blue', driver: {name: 'Max', age: 20, experience: 2, sex: 'male'}},
//     {model: 'Volkswagen', year: 2014, power: 320, color: 'red', driver: {name: 'Petro', age: 21, experience: 3, sex: 'male'}},
//     {model: 'Mersedes-Benz', year: 2015, power: 400, color: 'black', driver: {name: 'Pavlo', age: 32, experience: 10, sex: 'male'}},
//     {model: 'Renault', year: 2010, power: 330, color: 'blue', driver:  {name: 'Nastya', age: 30, experience: 9, sex: 'female'}},
//     {model: 'Volvo', year: 2012, power: 350, color: 'blue', driver: {name: 'Vika', age: 19, experience: 1, sex: 'female'}},
//     {model: 'Opel', year: 2011, power: 300, color: 'blue', driver: {name: 'Ivan', age: 20, experience: 1, sex: 'male'}},
//     {model: 'Porsche', year: 2009, power: 500, color: 'blue', driver: {name: 'Taras', age: 40, experience: 20, sex: 'male'}},
//     {model: 'Jeep', year: 2009, power: 400, color: 'blue', driver: {name: 'Vlad', age: 55, experience: 35, sex: 'male'}},
//     {model: 'Volvo', year: 2001, power: 200, color: 'blue', driver: {name: 'Oleksiy', age: 30, experience: 12, sex: 'male'}},
//     {model: 'BMW', year: 2002, power: 250, color: 'blue', driver: {name: 'Valentin', age: 45, experience: 20, sex: 'male'}}
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < arrayCars.length) {
//     console.log(arrayCars[i]);
//     i++
// }
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++
// }
// while (i < arrayCars.length) {
//     console.log(cars[i]);
//     i++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < arrayCars.length; i++) {
//     console.log(arrayCars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let arrayCar of arrayCars) {
//     console.log(arrayCar);
// }
// for (let city of cities) {
//     console.log(city);
// }
// for (let car of cars) {
//     console.log(car);
// }

// - взять объекты из задания 1 и превратить каждый в json.

// let objectsJSON = JSON.stringify(objectOne);
// let objectsJSON1 = JSON.stringify(objectTwo);
// let objectsJSON2 = JSON.stringify(objectThree);
// let objectsJSON3 = JSON.stringify(objectFour);
// let objectsJSON4 = JSON.stringify(objectFive);

// - взять json из задания 11 и превратить их обратно в объекты.

// JSON.parse(objectsJSON);
// JSON.parse(objectsJSON1);
// JSON.parse(objectsJSON2);
// JSON.parse(objectsJSON3);
// JSON.parse(objectsJSON4);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let carJson = '';
// for (let arrayCar of arrayCars) {
//     carJson = carJson + JSON.stringify(arrayCar);
// }
// console.log(carJson);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cityJson = '';
// for (let city of cities) {
//     cityJson = cityJson + JSON.stringify(city);
// }
// console.log(cityJson);

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let emptyArray = [];
// let carsJson = '';
// for (let car of cars) {
//     carsJson = carsJson + JSON.stringify(car);
//     emptyArray.push(carsJson);
// }
// console.log(emptyArray);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле
// skills которое является массивом. Проитерировать массив пользователей и в каждом
// пользователе проитерировать его массив skills

// let users = [ {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: [ 'java', 'js' ]
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: [ 'java', 'js', 'html' ]
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     skills: [ 'mysql', ',mongo' ]
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: [ 'java', 'js' ]
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     skills: [ 'mysql', ',mongo' ]
// } ];

// for (let i = 0; i < users.length; i++) {
//     for ( let user in users[i]) {
//         console.log(user);
//
//     }
//     console.log(users[i].skills);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let skillsArray = [];
// for (let i = 0; i < users.length; i++) {
//     for ( let user in users[i]) {
//         console.log(user);
//
//     }
//     console.log(users[i].skills);
//     skillsArray.push(users[i].skills);
// }
// console.log(skillsArray);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [ {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: [ 'java', 'js' ]
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: [ 'java', 'js', 'html' ]
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     skills: [ 'mysql', ',mongo' ]
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: [ 'java', 'js' ]
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     skills: [ 'mysql', ',mongo' ]
// } ];
//
// for (const user of users) {
//     console.log(user);
// }
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].skills);
// }

//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший
// порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let addressArray = [];
//
// for (let user of users) {
//     addressArray.push(user.address);
// }
// console.log(addressArray);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.

// let divka = document.createElement('div');
//
// for (let user of users) {
//     let temp = document.createElement('div');
//     temp.innerHTML = `${user.name}, ${user.age}`;
//     divka.appendChild(temp);
// }
// document.body.appendChild(divka);

// let divka = document.createElement('div');
//
// for (let user of users) {
//     let temp = document.createElement('div');
//     temp.innerHTML = `${user.name}, ${user.age}`;
//     divka.appendChild(temp);
// }
// document.body.appendChild(divka);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let divka = document.createElement('div');
// for (let user of users) {
//     let temp = document.createElement('div');
//     for (let user1 in user) {
//         let temp1 = document.createElement('div');
//         temp1.innerHTML = `${user1}`;
//         temp.appendChild(temp1);
//     }
//     divka.appendChild(temp);
// }
// document.body.appendChild(divka);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
//

// let divka = document.createElement("div");
//
// for (let i = 0; i < users.length; i++) {
//   let user = users[i];
//   let fullDiv = document.createElement("div");
//     let address = document.createElement("div");
//     let name = document.createElement("div");
//     let status = document.createElement("div");
//     let age = document.createElement("div");
//
//      name.innerHTML = user.name;
//      age.innerHTML = user.age;
//      status.innerHTML = user.status;
//
//   for(let item in user.address) {
//     let temp = document.createElement("div");
//     temp.innerHTML = item
//     address.appendChild(temp);
//   }
//   fullDiv.appendChild(name);
//   fullDiv.appendChild(age);
//   fullDiv.appendChild(status);
//   fullDiv.appendChild(address);
//   divka.appendChild(fullDiv);
// }
//
// document.body.appendChild(divka);
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [ {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// }, ];
// let citiesWithId = [ {
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// }, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// }, {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// }, ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//

// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     let withIdElement = usersWithId[i];
//     usersWithCities.push(withIdElement);
//     for (let j = 0; j < citiesWithId.length; j++) {
//         let idElement = citiesWithId[j];
//         if (withIdElement.id === idElement.user_id) {
//             withIdElement.address = idElement;
//         }
//     }
// }
// console.log(usersWithCities);


//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// idBlock = document.createElement('div');
// idBlock.id = 'laoo';
// idBlock.innerText = 'divka with text';
// idBlock.classList = 'laoo1';
// document.body.appendChild(idBlock);
// idBlock1 = document.getElementById('laoo');
// idBlock1i = idBlock1.innerText;
// console.log(idBlock1i);
// idBlock2 = document.getElementsByClassName('laoo1');
// for (let idBlock2Element of idBlock2) {
//     console.log(idBlock2Element.innerText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag

// idBlockId = document.getElementById('laoo');
// idBlockId.innerText = 'divka WITHOUT text';

// idBlockClass = document.getElementsByClassName('laoo1');
// for (let idBlock1 of idBlockClass) {
//     idBlock1.innerText = 'divka v divtsi';
// }

// idBlockTag = document.getElementsByTagName('div');
// for (let idBlock1 of idBlockTag) {
//     idBlock1.innerText = 'divka divka divka';
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// idBlockId = document.getElementById('laoo');
// idBlockId.style.height = '50px';
// idBlockId.style.width = '50px';

// idBlockClass = document.getElementsByClassName('laoo1');
// for (let idBlock1 of idBlockClass) {
//     idBlock1.style.height = '50px';
//     idBlock1.style.width = '50px';
// }

// idBlockTag = document.getElementsByTagName('div');
// for (let idBlock1 of idBlockTag) {
//     idBlock1.style.height = '50px';
//     idBlock1.style.width = '50px';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let tableJs = document.createElement('table');
// let tableTr = document.createElement('tr');
// tableJs.appendChild(tableTr);
// let tableTd = document.createElement('td');
// let tableTd1 = document.createElement('td');
// let tableTd2 = document.createElement('td');
// tableTd.innerText = 'hello';
// tableTd1.innerText = 'hello';
// tableTd2.innerText = 'hello';
// tableTr.appendChild(tableTd);
// tableTr.appendChild(tableTd1);
// tableTr.appendChild(tableTd2);
// document.body.appendChild(tableJs);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома
// ячейками всередені

// let tableJs = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tableTr = document.createElement('tr');
//     tableJs.appendChild(tableTr);
//     tableTr.innerText = `hello ${i}`;
//     for (let j = 0; j < 3; j++) {
//         let tableTd = document.createElement('td');
//         tableTr.appendChild(tableTd);
//         tableTd.innerText = 'world';
//     }
// }
//
// document.body.appendChild(tableJs);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let tableJs = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tableTr = document.createElement('tr');
//     tableJs.appendChild(tableTr);
//     tableTr.innerText = `row ${i}`;
//     for (let j = 0; j < 5; j++) {
//         let tableTd = document.createElement('td');
//         tableTr.appendChild(tableTd);
//         tableTd.innerText = 'hallo';
//     }
// }
//
// document.body.appendChild(tableJs);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let tableJs = document.createElement('table');
//
// let trNumber = prompt('tr?');
// let tdNumber = prompt('td?');
//
// for (let i = 0; i < trNumber; i++) {
//     let tableTr = document.createElement('tr');
//     tableJs.appendChild(tableTr);
//     tableTr.innerText = `row ${i}`;
//     for (let j = 0; j < tdNumber; j++) {
//         let tableTd = document.createElement('td');
//         tableTr.appendChild(tableTd);
//         tableTd.innerText = 'hallo';
//     }
// }
//
// document.body.appendChild(tableJs);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id

// let findId = document.getElementsByTagName('*');
// for (let findIdE of findId) {
//     if (findIdE.getAttribute('id')) {
//         console.log(findIdE);
//     }
// }

// - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let findId = document.getElementsByTagName('p');
// for (let findIdE of findId) {
//     findIdE.innerText = 'hello oktenweb';
// }

//     - знайти всі div та змінити ім колір на червоний

// let findId = document.getElementsByTagName('div');
// for (let findIdE of findId) {
//     findIdE.style.color = 'red';
// }

// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
//     тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let allH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ulList = document.createElement('ul');
// for (let allH2Element of allH2) {
//     let liList = document.createElement('li');
//     liList.innerText = allH2Element.innerText;
//     ulList.appendChild(liList);
// }
// document.body.appendChild(ulList);
// content.appendChild(ulList);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
//  в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// todo add rules



// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];

for (let rule of rules) {
    let ruleNumber = document.createElement('div');
        let titleH2 = document.createElement('h2');
        let bodyP = document.createElement('p');
        titleH2.innerText = rule.title;
        bodyP.innerText = rule.body;
        ruleNumber.appendChild(titleH2);
        ruleNumber.appendChild(bodyP);
    document.body.appendChild(ruleNumber);
}

//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту