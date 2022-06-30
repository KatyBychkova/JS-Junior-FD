// ЗАДАНИЕ 1

// let health = prompt('Введите число параметра "здоровье" для персонажа');
// if (health < 0 || !health) {
//     alert('Параметр "здоровье" должен быть больше нуля!')
//     console.log(health);
// }
// else {
//     alert(`Параметр "здоровье" равен ${health}`);
//     console.log(health);
// }


// ЗАДАНИЕ 2

// const temperatureInCelsius = +prompt('Введите температуру в градусах Цельсия');
//
// //debugger
// if (temperatureInCelsius === 0) {
//     alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//     alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }
//
// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// console.log(temperatureInFahrenheit);
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
// Фаренгейту.`);


// ЗАДАНИЕ 3

// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;
//
// debugger
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//     const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//     totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);


// ЗАДАНИЕ 4

/*
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

//Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    //debugger
    numbers[i] = numbers[i] ** 3
    sum += numbers[i]
}
console.log(sum) // 1158411

// Через цикл for of
sum = 0
numbers = [10, 4, 100, -5, 54, 2]

for (let num of numbers){

    sum += num ** 3
}
console.log(sum) // 1003904306910622800
*/


const moveBy10Pixels = (value) =>  {value + 10} ;

console.log(moveBy10Pixels(100));