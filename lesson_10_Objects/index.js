// ЗАДАНИЕ 1

// const users = [{
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     },
//     {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     },
//     {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }
// ];
//
//
// // const onlineUsers = users.filter((item, index) => {
// //     item = users[index].status
// //     if (item === "online") {
// //         return item
// //     }
// // })
//
// const onlineUsers = users.filter((item) =>  item.status === 'online')
//
// const usersOnlineNames = onlineUsers.map((item) => usersNames = item.username)
// .join(", ");
//
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)

//Задание #2

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     {id: 1, name: "Максим"},
//     {id: 2, name: "Николай"},
//     {id: 3, name: "Ангелина"},
//     {id: 4, name: "Виталий"},
// ];
//
// const result = giveTalonsInOrder(people, ordersArr);
//
// function  giveTalonsInOrder(arrayPeople, arrayNumbers) {
//     let array = [];
//     for (let i = 0; i < arrayNumbers.length; i++) {
//         for (let k = 0; k < arrayPeople.length; k++) {
//             if (arrayNumbers[i] === arrayPeople[k].id) {
//                 array.push(people[k]);
//             }
//         }
//     }
//    return array;
// };
// console.log('result', result);


/* Возвращает массив
[
{ id: 4, name: 'Виталий' },
{ id: 2, name: 'Николай' },
{ id: 1, name: 'Максим' },
{ id: 3, name: 'Ангелина' }
]
*/

/*Ты сперва делаешь цикл по ordersArr, и внутри этого цикла цикла делаешь цикл по people ,
и там делаешь проверку, если номер ordersArr[i]===people[j].id  тогда этот элемент закидываешь в новый массив
и  после всех циклов  и условий возвращаешь этот массив из функции*/

// Задание #3

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }
//
// function handleObject(obj, key, action) {
//     if (action === 'get') {
//         return obj[key];
//     } else if (action === 'add') {
//         obj[key] = '';
//         return obj;
//     } else if (action === 'delete') {
//         delete obj[key];
//         return obj;
//     } else {
//         return obj;
//     }
// }
//
//
// const result = handleObject(student, 'programmingLanguage', 'delete');
// console.log('result', result);

//Задание #4
/*
const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

function giveJobToStudent(student, jobName) {
    const updatedStudent = {
        ...student, ...{jobName: jobName}
    }
    console.log(updatedStudent);
    alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.jobName}`)
}
*/
/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
*/


//Задание #5


function sum(...arr) {
     return arr.reduce((acc, curVal) => acc + curVal, 0)
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773