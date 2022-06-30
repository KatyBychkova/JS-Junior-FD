const prize = {
  prize: "10 000$"
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25
  },
  "201": {
    name: "Светлана",
    age: 20
  },
  "304": {
    name: "Екатерина",
    age: 35
  }
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getWinner(applicants, winnerObject) {
  const participantsNumbers = Object.keys(winnerApplicants);
  const numberOfParticipants = participantsNumbers.length;
const winnerNumberIndex = getRandomNumberInRange(0, numberOfParticipants);
const winnerNumber = participantsNumbers[winnerNumberIndex];
const winner = winnerApplicants[winnerNumber];
return {...prize,
  ...winner};
}

const resultWinner = getWinner(winnerApplicants, prize);
console.log("resultWinner", resultWinner);