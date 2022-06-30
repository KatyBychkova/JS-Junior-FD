const goals = [8, 1, 1, 3, 2, -1, 5];

let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;
let indexOfGoals;
let numberOfGoals;
let number;
let sumGoals;


maxGoals(goals);
minGoals(goals);
sumOfGoals(goals);
withoutGoals(goals);
averageQuantityOfGoals(goals);
sortGoals(goals);

function maxGoals(arr) {
    arr.forEach((item) => {
        if (item > max) {
            max = item;
        }
    });
    numberOfGoals = max;
    indexOfGoals = arr.indexOf(numberOfGoals, 0);
    number = indexOfGoals + 1;
    alert(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`);
}

function minGoals(arr) {
    let minGoalsArrIndex = [];
    arr.forEach((item) => {
        if (item < min && item !== -1) {
            min = item;
        }
    });
    numberOfGoals = min;

    arr.findIndex((item, index) => {
        if (item === min) {
            let indexNumber = index + 1;
            minGoalsArrIndex.push(indexNumber);
        }
    });
    number = minGoalsArrIndex;
    alert(`Самые не результативные матчи были под номерами ${number}. В каждом из них было забито по ${numberOfGoals}мячу(а).`);

}

function sumOfGoals(arr) {
    let numberOfGoals = arr.reduce((accum, curVal) => {
        if (curVal === -1) {
            curVal = 0;
        }
        return accum + curVal;
    });
    sumGoals = numberOfGoals;
    alert(`Общее количество голов за сезон равно ${numberOfGoals}`);
}

function withoutGoals(arr) {
    let isGamewithoutGoals = arr.includes(-1, 0);
    if (isGamewithoutGoals) {
        alert(`Были автоматические поражения: да`);
    } else {
        alert(`Были автоматические поражения: нет`);
    }
}

function averageQuantityOfGoals(arr) {
    let avr = Math.round(sumGoals / arr.length);
    alert(`Среднее количество голов за матч равно ${avr}`);
}

function sortGoals(arr) {
    let sortArray = [...arr];
    sortArray.sort((a, b) => a - b);
    alert(`${sortArray}`);
}