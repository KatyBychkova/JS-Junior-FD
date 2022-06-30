// function getKiller(suspectInfo, deadPeople) {
//   let killerName = "";
//   Object.entries(suspectInfo).forEach((data) => {
//     const suspectPerson = data[0];
//     const peopleWereSeen = data[1];
//     const isKiller = deadPeople.every((deadName) =>
//       peopleWereSeen.includes(deadName)
//     );
//     if (isKiller) {
//       killerName = suspectPerson;
//     }
//   });

//   return killerName;
// }

function getKiller(suspectInfo, deadPeople) {
  let killerName;
  const suspects = Object.entries(suspectInfo);
  // console.log(suspects);
  suspects.forEach((item) => {
      const suspectName = item[0];
      const meetPersons = item[1];
      let killer = deadPeople.every((person) => {
       return  meetPersons.includes(person);
      });
      if (killer) {
        killerName = suspectName;
      }
  });
console.log(killerName);
  }


getKiller({
    Johnny: ["David", "Kyle", "Lucas"],
    James: ["Jacob", "Bill", "Lucas"],
    Peter: ["Lucy", "Kyle"]
  },
  ["Lucas", "Bill"]
); // Убийца James

getKiller({
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: []
  },
  ["Ben"]
); // Убийца Megan