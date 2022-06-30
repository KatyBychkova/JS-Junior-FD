// ЗАДАНИЕ 1


// Function declaration

// function getName1 (name) {
//    return `Имя равно ${name}`;
// }
//
// // Function expression
//
// const getName2  = function (name) {
//     return `Имя равно ${name}`;
// }
//
// // Arrow function expression
//
// const getName3 = name => {
//    return `Имя равно ${name}`
// }
//
// console.log(getName1("Kat"));
// console.log(getName2("Liz"));
// console.log(getName3("Alex"));


// ЗАДАНИЕ 2

/*
let number = +prompt("Введите число");
let type = prompt("Введите тип odd, even или ничего");
let sum = 0;

if (isNaN(number) || !number) {
    alert("Введено не числовое значение number");
} else {
    getSumOfNumbers(number, type);
    alert(`Сумма чисел от 0 до ${number} = ${sum}`);
}

function getSumOfNumbers(number, type = "odd") {
    for (let i = 0; i <= number; i++) {

        switch (type) {
            case "odd":
                if (i % 2 !== 0) {
                    sum += i;
                }
                break;
            case "even":
                if (i % 2 === 0) {
                    sum += i;
                }
                break;
            case "":
                sum += i;
                break;
            default:
                if (i % 2 !== 0) {
                    sum += i;
                }
                break;
        }

    }
    return sum;
}
*/

// ЗАДАНИЕ 3

const getDivisorsCount = function (number = 1) {

    if (!Number.isInteger(number) || isNaN(number) || number === 0) {
        alert(`number должен быть целым числом и больше нуля!`)
    } else {
        let count = 0;
        for (let i = 0; i <= number; i++) {
            if (number % i == 0) {
                count++;
            }
        }
        return count;
    }
}

console.log(getDivisorsCount(4.2))
console.log(getDivisorsCount(4)) // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)) // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)





