const password = prompt('Введите пароль');
const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (password.length < 3 || password.length > 30) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i += 1) {
    const symbol = password[i];
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}


//Решение Сергея Иванова

/*
let password = prompt('Введите пароль:');

let symbolsStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let symbolsNum = '0123456789';
let flag1 = false;
let flag2 = false;

for (let i = 0; i < password.length; i++){
    if(symbolsNum.includes(password[i])){
        flag1 = true;
    }
}

for (let i = 0; i < password.length; i++){
    if(symbolsStr.includes(password[i])){
        flag2 = true;
    }
}

if(password.length >= 3 && password.length <= 20 && flag1 === true && flag2 === true){
    alert('Пароль валидный. Добро пожаловать в аккаунт!');
}else{
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз');
}
*/