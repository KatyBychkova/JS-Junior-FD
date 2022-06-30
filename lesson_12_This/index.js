// //Задание #1
// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//      this.level++;
//      if (this.level === 2) {
//          this.stack.push('CSS')
//      }
//      else if (this.level === 3) {
//          this.stack.push('JavaScript')
//      }
//      else if (this.level === 4) {
//          this.stack.push('React')
//      }
//      else if (this.level === 5) {
//          this.stack.push('NodeJS')
//      }
//      else if (this.level > 5) {
//         alert(`Студент выучил все технологии!`)
//      }
//      return this
//     }
// }

// console.log(student.improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel());
//    ;

// //Задание #2

// const dog = {
//   name: "Чарли",
//   type: "Собака",
//   makeSound() {
//     return "Гав-Гав";
//   }
// };

// const bird = {
//   name: "Петя",
//   type: "Воробей",
//   makeSound() {
//     return "Чик-чирик";
//   }
// };

// function makeDomestic(isDomestic = '') {
//   alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return this
// }

// console.log(makeDomestic.call(bird, 'isDomestic: true'));
// console.log(makeDomestic.apply(bird, ['isDomestic: true']));
// const makeDomesticBind = makeDomestic.bind(dog, 'isDomestic: false');
// console.log(makeDomesticBind());


//Задание #3
//К сожалению, данный код работает неверно. В некоторых случаях он выводит undefined, а в других - вообще ошибку.
// Вам необходимо исправить данный код используя bind(), call() и apply().
// Функцию attack() необходимо исправить при помощи bind() + нужно вспомнить особенность стрелочных функций (нет своего this).
// Функцию score() - при помощи call().
// Функцию substitute() - при помощи apply().



const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: function() {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution(newPlayer) {
        console.log(
            `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
        );
    }
};


const attack = footballer.attack.bind(footballer);
function score(sound) {
    footballer.scoreGoal.call(footballer, sound);
};
function substitute(newPlayer) {
    const substitute = footballer.goToSubstitution.apply(footballer, [newPlayer]);
};


attack();
score("Сиииии");
substitute("Paulo Dibala");

