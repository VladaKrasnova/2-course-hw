// УРОК 7

// Задание 1

// let a = 'js';
// console.log(a.toUpperCase());


// Задание 2

function searchStart (arr, str){
    arr.forEach((item) => {
        if (item.toLowerCase().startsWith(str.toLowerCase())) {
            console.log(item);
        }
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');




// Задание 3

// let num = 32.58884;

// До меньшего целого
// console.log(Math.floor(num));

// До большего целого
// console.log(Math.ceil(num));

// До ближайшего целого
// console.log(Math.round(num));



// Задание 4

// наименьшее числа
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// наибольшее числа
// console.log(Math.max(52, 53, 49, 77, 21, 32));


// Задание 5

// function getRandom(min, max) {
//     console.log(Math.round(Math.random() * max) + 1);
// }

// getRandom(5, 10);


// Задание 6

// function getNum(a) {
//     console.log(Array.from(Array(Math.floor(a / 2)), () => Math.round(Math.random() * a)));
// }

// getNum(9);

// Задание 7

// function getRandom(min, max) {
//     console.log(Math.round(Math.random() * (max - min)) + min);
// }

// getRandom(5, 30);


// Задание 8

// let date = new Date("15/04/2023");
// console.log(date);


// Задание 9

let currentDate = new Date();
let newDay = currentDate.setDate(currentDate.getDate() + 73);
console.log(newDay);


// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


function getTime(date){
    let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] + ". Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ; 

    return fullDate; 
}

console.log(getTime(new Date()));


// Задание 11


