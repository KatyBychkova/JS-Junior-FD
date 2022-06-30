const hero = {
  name: "Batman",
  health: 20,
  heatEnemy(enemy) {
    enemy.health = enemy.health - 10;
  }
};


const enemy = {
  name: "Joker",
  health: 20,
  heatHero(hero) {
    hero.health = hero.health - 10;
  }
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
    const randomHeatIndex = getRandomNumberInRange(0, 1);
    if (randomHeatIndex === 0) {
      heroPlayer.heatEnemy(enemyPlayer);
      if (enemyPlayer.health <= 0) {
        break;
      }
    } else {
      enemyPlayer.heatHero(heroPlayer);
      if (heroPlayer.health <= 0) {
        break;
      }
    }
  }

  if (heroPlayer.health <= 0) {
    alert(
      `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
    );
  } else {
    alert(
      `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
    );
  }
}


// function startGame(heroPlayer, enemyPlayer) {
//   let winner;
//   let winnerHealth;
//   while (heroPlayer.health !== 0 && enemyPlayer.health !== 0) {
//     let num = getRandomNumberInRange(0, 1);
//     if (num === 0) {
//       heroPlayer.heatEnemy(heroPlayer);
//     } 
//     if (num === 1) {
//       enemyPlayer.heatHero(enemyPlayer);
//     }
//   }

//   if (heroPlayer.health > enemyPlayer.health) {
//     winner = heroPlayer.name;
//     winnerHealth = heroPlayer.health;
//   } 
//   if (heroPlayer.health < enemyPlayer.health){
//     winner = enemyPlayer.name;
//     winnerHealth = enemyPlayer.health;
//   }

//   alert(`${winner} победил! У него осталось ${winnerHealth} здоровья`);
// }

startGame(hero, enemy);