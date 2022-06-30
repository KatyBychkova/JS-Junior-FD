//Задание #1

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.technologies = [];
//   this.status = "Junior";
//   this.setTechnologies = function (technologies) {
//     this.technologies = [...this.technologies, ...technologies];
//   };
//   this.setNewStatus = function (newStatus) {
//     this.status = newStatus;
//   };
// }

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = "Junior";
//   }

//   setTechnologies(technologies) {
//     this.technologies = [...this.technologies, ...technologies];
//   };
//   setNewStatus(newStatus) {
//     this.status = newStatus;
//   };
// }


// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);


// Задание #2

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(person2) {
//     if (this.age >= person2.age) {
//       alert(`${this.name} старше, чем ${person2.name}`)
//     }
//     else {
//       alert(`${this.name} младше, чем ${person2.name}`)
//     };
//   }
// }


// const person1 = new Person("Максим", 24);
// const person2 = new Person("Светлана", 36);
// const person3 = new Person("Ирина", 23);

// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина
// person3.compareAge(person1); // Ирина младше, чем Максим


// Задание #3

// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }
//
//     add(word, description) {
//         this.words[word] = {
//             word,
//             description,
//         }
//     }
//
//     remove(word) {
//         delete this.words[word];
//     }
//
//     get(word) {
//         return this.words[word];
//     }
//
//     showAllWords() {
//         const wordsArray = Object.values(this.words)
//         for (let i = 0; i < wordsArray.length; i++) {
//             console.log(wordsArray[i].word + " - " + wordsArray[i].description)
//         }
//     }
//
// }
//
// const dictionary = new Dictionary("Толковый словарь");
// dictionary.add("JavaScript", "популярный язык программирования");
// dictionary.add(
//     "Веб-разработчик",
//     "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
// );
// console.log(dictionary)
// dictionary.remove("JavaScript");
// dictionary.showAllWords();


// Задание #4

// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }
//
//     add(word, description) {
//         this.words[word] = {
//             word,
//             description,
//         }
//     }
//
//     remove(word) {
//         delete this.words[word];
//     }
//
//     get(word) {
//         return this.words[word];
//     }
//
//     showAllWords() {
//         const wordsArray = Object.values(this.words)
//         for (let i = 0; i < wordsArray.length; i++) {
//             console.log(wordsArray[i].word + " - " + wordsArray[i].description)
//         }
//     }
//
// }
//
// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//     }
//
//     add(word, description, isDifficult) {
//         this.words[word] = {
//             word,
//             description,
//             isDifficult: true,
//         }
//     }
// }
//
// const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
//
// hardWordsDictionary.add(
//     "дилетант",
//     "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
// );
//
// hardWordsDictionary.add(
//     "неологизм",
//     "Новое слово или выражение, а также новое значение старого слова."
// );
//
// hardWordsDictionary.add(
//     "квант",
//     "Неделимая часть какой-либо величины в физике."
// );
//
// hardWordsDictionary.remove("неологизм");
//
// hardWordsDictionary.showAllWords();


// Задание #5

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() {

    }

    learnNewTechnologies(technology) {
        this.technologies.push(technology)
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Junior') {
        super(fullName, age, position = 'Junior');
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log(`Junior разработчик пишет код...`)
    }
}

 class MiddleDeveloper extends Developer{
    constructor (fullName, age, position = 'Middle') {
        super(fullName, age, position = 'Middle');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
     code() {
         console.log(`Middle разработчик пишет код...`)
     }
 }

 class SeniorDeveloper extends Developer {
     constructor (fullName, age, position = 'Senior') {
         super(fullName, age, position = 'Senior');
         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
     }
     code() {
         console.log(`Senior разработчик пишет код...`)
     }
 }

const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies("Docker");

console.log(
    juniorDeveloper.fullName,
    juniorDeveloper.age,
    juniorDeveloper.position,
    juniorDeveloper.technologies
);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(
    middleDeveloper.fullName,
    middleDeveloper.age,
    middleDeveloper.position,
    middleDeveloper.technologies
);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(
    seniorDeveloper.fullName,
    seniorDeveloper.age,
    seniorDeveloper.position,
    seniorDeveloper.technologies
);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']

