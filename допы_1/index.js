// ЗАДАНИЕ 1

let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

let javaScriptDescriptionLength = javaScriptDescription.length;

let endOfStringIndex = javaScriptDescriptionLength/2;

if (endOfStringIndex % 1 != 0) {
    endOfStringIndex = Math.floor(endOfStringIndex);
}

let newString = javaScriptDescription.slice(0, endOfStringIndex);
console.log(newString);

newString = newString.replaceAll('а', 'А').replaceAll('a', 'A');
newString = newString.replaceAll(' ', '');
newString = newString.repeat(3);

let centerOfNewString = newString.length/2;

if (centerOfNewString % 1 != 0){
    centerOfNewString = Math.floor(centerOfNewString);
}

console.log(newString[centerOfNewString]);
console.log(newString);


// ЗАДАНИЕ 2


let clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount = 0;

if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300){
    discount = 10;
}
else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
}
else if (clientSpentForAllTime >= 500) {
    discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

let clientSpentTodayWithDiscount = clientSpentToday * (100 - discount)/100;
clientSpentForAllTime = (clientSpentForAllTime + clientSpentTodayWithDiscount);

alert(`Спасибо, ${clientName}! К оплате ${clientSpentTodayWithDiscount}$.
За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);

// ЗАДАНИЕ 3

let clientName = prompt('Введите имя клиента');
clientName = clientName.trim();

let clientSpentForAllTime = prompt('Сколько клиент потратил сегодня?');
clientSpentForAllTime = clientSpentForAllTime.trim();
clientSpentForAllTime = Number(clientSpentForAllTime);

let clientSpentToday = prompt('Сколько клиент потратил за все время?');
clientSpentToday = clientSpentToday.trim();
clientSpentToday = Number(clientSpentToday);


if (isNaN(clientSpentForAllTime) || isNaN(clientSpentToday)) {
    alert(`Сумма, которую клиент потратил за все время \r
     и которую потратил сегодня, должна быть числом!\r
     Перезагрузите страницу, чтобы повторить попытку.`);
} else {
    let discount = 0;
    if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }

    alert(`Размер скидки ${discount}%!`);

    let clientSpentTodayWithDiscount = clientSpentToday * (100 - discount) / 100;
    clientSpentForAllTime = (clientSpentForAllTime + clientSpentTodayWithDiscount);

    alert(`${clientName} к оплате ${clientSpentTodayWithDiscount}$. \r
За все время в нашем ресторане клиент потратил ${clientSpentForAllTime}$.`);
}

// ЗАДАНИЕ 4

let password = prompt('Введите пароль');
let bigLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
let numbers = '0123456789';

let isBigLetters = false;
let isNumbers = false;

let passwordLength = password.length;

for (let i = 0; i < passwordLength; i++) {

    for (let k = 0; k < numbers.length; k++) {
        if (password[i] === numbers[k]) {
            isNumbers = true;
            break;
        }
    }

    for (let k = 0; k < bigLetters.length; k++) {
        if (password[i] === bigLetters[k]) {
            isBigLetters = true;
            break;
        }
    }

}


if (passwordLength > 2 && passwordLength < 21 &&  isBigLetters === true && isNumbers === true) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}









