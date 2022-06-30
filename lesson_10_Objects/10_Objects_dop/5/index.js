const usersArray = [{
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25
  },
  {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15
  },
  {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13
  },
  {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31
  },
  {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18
  }
];

const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18
  }
};


function getAdultUsers(users) {
  if (typeof users === "object" && users !== null) {
    return Array.isArray(users)
      ? users.filter((u) => u.age >= 18)
      : Object.keys(users)
          .filter((keyOfUser) => users[keyOfUser].age >= 18)
          .reduce((accNewObj, keyOfUser) => {
            accNewObj[keyOfUser] = users[keyOfUser];   
            return accNewObj;
          }, {});
  } else {
    return [];
  }
}

console.log(getAdultUsers(usersObject));
console.log(getAdultUsers(usersArray));