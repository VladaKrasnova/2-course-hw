// УРОК 5

    // Задание 1

// function returnNumber(a, b) {
//     if (a >= b){
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(returnNumber(3, 3));

    // Задание 2

// function defineNumber(a) {
//     let num = a % 2;
//     if (num == 0){
//         return 'Число четное';
//     } else{
//         return 'Число нечетное';
//     }
// }

// console.log(defineNumber(46));

    // Задание 3.1

// function toSquare(a) {
//         console.log(a**2);
// }

// toSquare(3);

    // Задание 3.2

// function square(a) {
//     return(a**2);
// }

// console.log(square(6));
    

    // Задание 4

// function sayHello(){
//     let age = prompt('Сколько тебе лет?');
//     if(age < 0){
//         alert('Вы ввели неправильное значение!');
//     }else if (age >= 13){
//         alert('Добро пожаловать!');
//     }else {
//         alert('Привет, друг!');
//     }
// }

// sayHello();


    // Задание 5

// function multNumber(a, b){
//     if(isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     }else {
//         return a * b;
//     }
// }
// console.log(multNumber(7, 5));


    // Задание 6

// function multNumbers() {
//     let num = prompt('Напишите число');
//     let n = num**3;
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `N в кубе равняется ${n}`;
//     }
// }
// console.log(multNumbers());


    // Задание 7

// function getArea() {
//     let area = 3.14 * this.radius**2;
//     return area;
// }

// function getPerimeter() {
//     let perimeter = 2 * 3.14 * this.radius**2;
//     return perimeter;
// }

// let circle1 = {
//     radius: 20,
//     getCircleArea: getArea,
//     getCirclePerimeter: getPerimeter
// }

// let circle2 = {
//     radius: 13,
//     getCircleArea: getArea,
//     getCirclePerimeter: getPerimeter
// }

// console.log(circle1.getCircleArea());
// console.log(circle1.getCirclePerimeter());
// console.log(circle2.getCircleArea());
// console.log(circle2.getCirclePerimeter());




