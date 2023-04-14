// УРОК 6

    // Задание 1

// const arr = [1, 5, 4, 10, 0, 3];

// for (let item of arr) {
//     if (item == 10){
//         console.log(item);
//         break;
//     }
// 	console.log(item);
// }

    // Задание 2

// const array = [1, 5, 4, 10, 0, 3];

// console.log(array.indexOf(4));


    // Задание 3

// const num = [1, 3, 5, 10, 20];

// console.log(num.join(' '));


    // Задание 4

// let arr = [];

// for(let i = 0; i < 3; i++){
//     arr[i] = [];
//     for(let k = 1; k < 4; k++){
//         arr[i].push(k - (k-1));
//     }
// }

// console.log(arr);


    // Задание 5

// let array = [1, 1, 1];

// array.push(2, 2, 2);

// console.log(array);


    // Задание 6

// let arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();
// arr.pop();

// console.log(arr);

    // Задание 7

// const arr = [9, 8, 7, 6, 5];
// let num = Number(prompt('Введите число от 1 до 10'));

// if (arr.indexOf(num) >= 0){
//     alert(`Число ${num} есть в массиве`)
// }else{
//     alert(`Число ${num} нет в массиве`)
// }

    // Задание 8

// let str = 'abcdef';
// let arr = str.split('');
// let arrReverse = arr.reverse();
// let arrJoin = arrReverse.join('');

// console.log(arrJoin);


    // Задание 9

// let arr = [[1, 2, 3,],[4, 5, 6]];
// let result = [].concat(...arr);

// console.log(result);

    // Задание 10

// let array = [1, 4, 6, 3, 9, 5];

// for (let i = 0; i < (array.length - 1); i++) {
//     array[i] = array[i] + array[i + 1];
// }

// console.log(array);


    // Задание 11

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = num.map(function (item) {
//   return item ** 2;
// })

// console.log(result);


    // Задание 12

// const getLength = arr => arr.map(str => str.length);

// console.log(getLength(['один', 'два', 'три', 'четыре', 'пять']));
// console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));


    // Задание 13

const getNum = array => array.filter(item => item < 0);

console.log(getNum([1, -3, 5, 6, -4, -9, -7, 2, -8]));


