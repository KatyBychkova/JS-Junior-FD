// ЗАДАНИЕ 1

const myName = "Екатерина";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилена Минина";
const reasonText = "это интересно";
const numberOfMonth = "3";

console.log(`Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе
по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`);



// ЗАДАНИЕ 2

let myInfoText = `Всем привет! Меня зовут, Екатерина.
Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript у Владилена Минина.
Я хочу стать веб-разработчиком, потому что это интересно.
До этого я изучала JavaScript 3 месяца. Я уверена, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');
console.log(myInfoText);

let length = myInfoText.length;
console.log(length);

console.log(myInfoText[0],myInfoText[length-1]);



// ЗАДАНИЕ 3

let userName = prompt('Как вас зовут?');
userName = userName.toLowerCase().trim();
alert(`Вас зовут ${userName}`);



// ЗАДАНИЕ 4

let userAge = prompt('Сколько вам лет?');
userAge = userAge.trim();
userAge = Number(userAge);
alert(`Вас зовут ${userName} и вам ${userAge} лет`);



// ЗАДАНИЕ 5

let userString = prompt("Введите текст для обрезки");
userString = userString.trim();

let startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки");
startSliceIndex = startSliceIndex.trim();
startSliceIndex = Number(startSliceIndex);

let endSliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки");
endSliceIndex = endSliceIndex.trim();
endSliceIndex = Number(endSliceIndex);

let string = userString.slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${string}`);



// ЗАДАНИЕ 6

let userText = prompt("Введите текст");
userText = userText.trim();

let wordFromText = prompt("Введите слово из текста");
wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);

let string = userText.slice(0, indexOfWord);
alert(`Результат: ${string}`);








