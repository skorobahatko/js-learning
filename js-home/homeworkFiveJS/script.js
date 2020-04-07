//
//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(tag, action, attOne, attActionOne, attTwo, attActionTwo) {
//     this.nameOfTag = tag,
//     this.action = action,
//     this.attributes = [];
//
//     this.attributes[0] = {name: attOne, attAction: attActionOne};
//     this.attributes[1] = {name: attTwo, attAction: attActionTwo};
//
// }
// let aTag = new Tag('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href',
//     'Задает адрес документа, на который следует перейти.');
// console.log (aTag);
// let divTag = new Tag('div','Элемент div является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега',
//     'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log (divTag)
// let h1Tag = new Tag('h1','Tег h1 представляет собой наиболее важный заголовок первого уровня', 'align',
//     'Определяет выравнивание заголовка.', 'class', 'Определяет имя класса, которое ' +
//     'позволяет связать тег со стилевым оформлением.');
// console.log (h1Tag);
// let spanTag = new Tag('span', 'Тег span предназначен для определения строчных элементов документа.', 'id',
//     'Указывает имя стилевого идентификатора.', 'contextmenu','Устанавливает контекстное меню для элемента.');
// console.log (spanTag);
// let inputTag = new Tag('input', 'Тег input является одним из разносторонних элементов формы и позволяет' +
//     ' создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'align', 'Определяет выравнивание изображения.',
//     'autofocus', 'Устанавливает фокус в поле формы.');
// console.log (inputTag);
// let formTag = new Tag('form', 'Тег form устанавливает форму на веб-странице.', 'action',
//     'Адрес программы или документа, который обрабатывает данные формы.', 'name', 'Имя формы.');
// console.log (formTag);
// let optionTag = new Tag('option', 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.', 'disabled',
//     'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
// console.log (optionTag);
// let selectTag = new Tag('select', 'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,' +
//     ' как показано далее.', 'size', 'Количество отображаемых строк списка.', 'required',
//     'Список обязателен для выбора перед отправкой формы.\n');
// console.log (selectTag);
// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag {
//     constructor(tag, actionTag, att1, attAction1, att2, attAction2) {
//         this.nameOfTag = tag,
//         this.action = actionTag,
//         this.attributes = [];
//
//         this.attributes[0] = {name: att1, attAction: attAction1};
//         this.attributes[1] = {name: att2, attAction: attAction2};
//     }
// }
// let aTag = new Tag('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href',
//     'Задает адрес документа, на который следует перейти.');
// console.log (aTag);
// let divTag = new Tag('div','Элемент div является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега',
//     'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log (divTag)
// let h1Tag = new Tag('h1','Tег h1 представляет собой наиболее важный заголовок первого уровня', 'align',
//     'Определяет выравнивание заголовка.', 'class', 'Определяет имя класса, которое ' +
//     'позволяет связать тег со стилевым оформлением.');
// console.log (h1Tag);
// let spanTag = new Tag('span', 'Тег span предназначен для определения строчных элементов документа.', 'id',
//     'Указывает имя стилевого идентификатора.', 'contextmenu','Устанавливает контекстное меню для элемента.');
// console.log (spanTag);
// let inputTag = new Tag('input', 'Тег input является одним из разносторонних элементов формы и позволяет' +
//     ' создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'align', 'Определяет выравнивание изображения.',
//     'autofocus', 'Устанавливает фокус в поле формы.');
// console.log (inputTag);
// let formTag = new Tag('form', 'Тег form устанавливает форму на веб-странице.', 'action',
//     'Адрес программы или документа, который обрабатывает данные формы.', 'name', 'Имя формы.');
// console.log (formTag);
// let optionTag = new Tag('option', 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.', 'disabled',
//     'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
// console.log (optionTag);
// let selectTag = new Tag('select', 'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,' +
//     ' как показано далее.', 'size', 'Количество отображаемых строк списка.', 'required',
//     'Список обязателен для выбора перед отправкой формы.\n');
// console.log (selectTag);

// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// let car = {
//     model: 'Opel',
//     producer: 'Germany',
//     yearProduct: 2013,
//     maxSpeed: 200,
//     engineValue: 2,
//     drive: function () {
//         console.log (`We ride ${this.maxSpeed} per hour!!!`);
//     },
//     info: function () {
//         for (let carKeys in car) {
//             console.log (car[carKeys]);
//         };
//     },
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear (newValue) {
//         this.yearProduct = newValue;
//     },
//     addDriver (driver) {
//         car.newDriver = driver;
//     }
// };
// driv = {
//     name: 'hallo',
//     age: 19
// };
// car.addDriver(driv)
// console.log (car);

//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//     виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// function Car (model, producer, yearProduct, maxSpeed, engineValue)  {
//     this.model = model;
//     this.producer = producer;
//     this.yearProduct = yearProduct;
//     this.maxSpeed = maxSpeed;
//     this.engineValue = engineValue;
//     this.drive = function () {
//         console.log (`We ride ${this.maxSpeed} per hour!!!`);
//     },
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(this[key]);
//                 }
//             }
//         }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     this.changeYear = function (newValue) {
//         this.yearProduct = newValue;
//     },
//     this.addDriver = function (driver) {
//         this.newDriver = driver;
//     }
// };
// driv = {
//     name: 'hallo',
//     age: 19
// };
//
// let car1 = new Car('opel', 'germany', 2015, 250, 10);
// car1.info();
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// class Car {
//     constructor(model, producer, yearProduct, maxSpeed, engineValue) {
//         this.model = model;
//             this.producer = producer;
//             this.yearProduct = yearProduct;
//             this.maxSpeed = maxSpeed;
//             this.engineValue = engineValue
//     }
//     drive () {
//         console.log (`We ride ${this.maxSpeed} per hour!!!`);
//     }
//     info () {
//         for (const car1Key in this) {
//             if (typeof this[car1Key] !== 'function') {
//                 console.log (this[car1Key]);
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.yearProduct = newValue;
//     }
//     addDriver (driver) {
//         Car.newDriver = driver;
//     }
// };
//
// let newCar = new Car('opel', 'germany', 2015, 250, 10);
// newCar.info();

//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//

// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let arrayPopelushka = [];
// for (let i = 0; i < 10; i++) {
//     let pop = new Popelushka('popelushka '+ i, 20 + i,25+i);
//     arrayPopelushka.push(pop);
// }
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let randomShoe = Math.floor(Math.random() * (34 - 25 + 1) + 25);
// let prince = new Prince('prin',25, randomShoe);
// console.log (prince);
//
// for (let arrayPopelushkaElement of arrayPopelushka) {
//         if (arrayPopelushkaElement.footSize === randomShoe) {
//             console.log (`I find her! Her name is ${arrayPopelushkaElement.name}!`)
//         }
// }

//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Popelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrayPopelushka = [];
// for (let i = 0; i < 10; i++) {
//     let pop = new Popelushka('popelushka '+ i, 20 + i,25+i);
//     arrayPopelushka.push(pop);
// }
// function Prince(name, age) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = Math.floor(Math.random() * (34 - 25 + 1) + 25);
//     this.findPopelushka = function (array) {
//         for (let arrayElement of array) {
//               if (arrayElement.footSize === this.shoeSize) {
//                   console.log (`I find her! Her name is ${arrayElement.name}!`);
//               }
//         }
//     }
// }
// let prince = new Prince('prin', 25);
// prince.findPopelushka(arrayPopelushka);