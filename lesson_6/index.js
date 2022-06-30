// ЗАДАНИЕ 1

let existingUserLogin = "the_best_user";
let existingUserPassword = 12345678;

let userLogin = prompt("Введите логин");
userLogin = userLogin.trim();

let userPassword = prompt("Введите пароль");
userPassword = userPassword.trim();
userPassword = Number(userPassword);

if (userLogin === existingUserLogin && userPassword === existingUserPassword){
    alert(`Добро пожаловать, ${userLogin}!`)
}
else {
    alert("Логин и (или) Пароль введены неверно!")
}



// ЗАДАНИЕ 2

let correctAnswers = 0;
let incorrectAnswers = 0;

let question1 = prompt("Сколько будет 2 + 2?");
question1 = question1.trim();
question1 = Number(question1);

if (question1 === 4){
    alert("Ответ Верный");
    ++correctAnswers;
}
else {
    alert("Ответ Неверный");
    ++incorrectAnswers;
};

let question2 = prompt("Сколько будет 2 * 2");
question2 = question2.trim();
question2 = Number(question2);
if (question2 === 4){
    alert("Ответ Верный");
    ++correctAnswers;
}
else {
    alert("Ответ Неверный");
    ++incorrectAnswers;
};

let question3 = prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?");
question3 = question3.trim();
question3 = Number(question3);
if (question3 === 1){
    alert("Ответ Верный");
    ++correctAnswers;
}
else {
    alert("Ответ Неверный");
    ++incorrectAnswers;
};

let question4 = prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?");
question4 = question4.trim();
question4 = Number(question4);
if (question4 === 12){
    alert("Ответ Верный");
    ++correctAnswers;
}
else {
    alert("Ответ Неверный");
    ++incorrectAnswers;
};

let question5 = prompt("Сколько будет 2 + 2 * 2");
question5 = question5.trim();
question5 = Number(question5);
if (question5 === 6){
    alert("Ответ Верный");
    ++correctAnswers;
}
else {
    alert("Ответ Неверный");
    ++incorrectAnswers;
};

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)




// ЗАДАНИЕ 4

let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    i +=1;
}

let k = 0;
do{
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    k += 1;
} while (k < 3);



// ЗАДАНИЕ 5

let sum = 0;

for (let i = 0; i <= 100; i ++){
    sum = sum + i;
};

alert(`Сумма чисел от 0 до 100 равна ${sum}`);


