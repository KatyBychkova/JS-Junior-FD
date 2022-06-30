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


// const footballer = {
//   fullName: "Cristiano Ronaldo",
//   attack: function() {
//     console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//   }
  // scoreGoal(sound) {
  //   console.log(`${this.fullName} забил гол! Вот это да!`);
  //   this.celebrate(sound);
  // },
  // celebrate(sound) {
  //   console.log(sound);
  // },
  // goToSubstitution: function (newPlayer) {
  //   console.log(
  //     `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
  //   );
  // }
// };

// footballer.attack()

// attack.call(footballer)
//const attack = attack.bind(footballer);
// const score = score.call(footballer.scoreGoal);
// const substitute = footballer.goToSubstitution;
//attack();
// score("Сиииии");
// substitute("Paulo Dibala");

const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  }
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  }
};


function makeDomestic(isDomestic = '') {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this
}

makeDomestic.call(bird, 'isDomestic: true');
// makeDomestic.apply(bird, ['isDomestic: true']);
// const makeDomesticBind = makeDomestic.bind(dog, 'isDomestic: false');
// makeDomesticBind();


// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic
//   };
// }

// makeDomestic.bind(dog, true)();
// makeDomestic.call(bird, false);
// makeDomestic.apply(bird, [true]);