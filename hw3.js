//  УРОК 3 
// Задание 1

// let password = 'пароль';
// let userPassword = prompt ("Введите пароль", "");


// password == userPassword ? alert("Пароль введен верно"): alert("Пароль введен неправильно");



    // Задание 2

// const c = 7;

// if (c > 0 && c < 10){
//     console.log ('Верно');
// }else {
//     console.log ('Неверно');
// }

// Задание 3

// const d = 754;
// const e = 84;

// d > 100 || e > 100 ? console.log ('Верно') : console.log ('Неверно');


// Задание 4

// const a = '2';
// const b = '3';
// alert(Number(a) + Number(b));


// Задание 5

// let monthNumber = prompt('Введите номер месяца', '');

// switch (monthNumber){
//     case '1':
//     case '2':
//     case '12':
//         alert('Зима');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert('Весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert('Лето');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert('Осень');
//         break;
//     default:
//         alert('Такого месяца не существует');
//         break;  
// }


// Задание 7

// let a = prompt ('Пожалуйста, введите любое число', '');
// let x = a % 2; 

// if (isNaN (a)){
//     alert ('Вы ввели не число!');
// }  else if (x == 0) {
//     alert ('Число четное');
// } else{
//     alert ('Число нечетное');
// }


// Задание 8

// let clientOS = prompt('Какой операционной системой вы пользуетесь? (0 — iOS, 1 — Android)', '');

// if (isNaN(clientOS) || clientOS < 0 || clientOS > 1) {
//     alert('Вы ввели неправильное число!');
// } else if (clientOS == 1) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if (clientOS == 0) {
//     alert('Установите версию приложения для iOS по ссылке');
// }

// Задание 9


// let clientOS = prompt('Какой операционной системой вы пользуетесь? (0 — iOS, 1 — Android)', '');
// let clientDeviceYear = prompt('В каком году произведен Ваш телефон', '');

// if (isNaN(clientOS) || clientOS < 0 || clientOS > 1) {
//     alert('Вы ввели неправильное число!');
// } else if ((clientOS == 1) && (clientDeviceYear >= 2015)) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if ((clientOS == 1) && (clientDeviceYear < 2015)) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// } else if ((clientOS == 0) && (clientDeviceYear >= 2015)) {
//     alert('Установите версию приложения для iOS по ссылке');
// } else if((clientOS == 0) && (clientDeviceYear < 2015)) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// }
