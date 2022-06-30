// ЗАДАНИЕ 1


// function checkQuestionAnswer(question, correctAnswer) {

//     let questionInput = (prompt(question))
//     .toLowerCase()
//     .trim();
//     correctAnswer = correctAnswer.toLowerCase();
//       if (questionInput === correctAnswer) {
//         alert(`Ответ верный`);
//     }
//     else {
//         alert(`Ответ неверный`)
//     }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');


// Задание #2


function showSuccessMessage(message) {
    console.log(message);
}

function showErrorMessage(message) {
    console.error(message);
}


function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback ) {
    let pos = 0;
    for (const symbol of text){
        if (symbol === errorSymbol) {
            let i = text.indexOf(errorSymbol, pos);
            if (text.includes(errorSymbol)) {
                errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
            }
            else {
                successCallback(`В данном тексте нет запрещенных символов`);
            }
        }
        pos++;
    }
} 

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
// Задание #1 

// const goals = [8, 1, 1, 3, 2, -1, 5];

// let numberOfGoals;
// let number;
// let numbers = [];




// goals.filter((numberOfGoals, number, array) => {
//     if (numberOfGoals === Math.max(...array)) {
//         alert(`Самый результативный матч был под номером ${number + 1}. В нем было забито ${numberOfGoals} гол(ов).`);
//     }
// });

// goals.filter((numberOfGoals, number) => {
//     for (let numberOfGoals of goals) {
//         if (numberOfGoals < 2 && numberOfGoals > 0) {
//             numbers.push(number);
//         }
//     }
//     numbers = numbers.join(", ");
//     alert(`Самые нерезультативные матчи были под номерами ${numbers}. 
// В каждом из них было забито по ${numberOfGoals} мячу(а).`);
// })