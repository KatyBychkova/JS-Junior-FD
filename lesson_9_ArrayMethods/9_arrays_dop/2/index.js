/*const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

const getMathResult = (expression) => {
  let resultExpression = [...expression];
  if (expression.length > 3) {
    resultExpression = resultExpression.filter(
      (item) => isNumber(item) || possibleMathSigns.includes(item)
    );
  }
  const firstDigit = Number(resultExpression[0]);
  const secondDigit = Number(resultExpression[resultExpression.length - 1]);
  const mathSign = resultExpression[1];

  if (
    resultExpression.length < 3 ||
    expression.length < 3 ||
    !isNumber(firstDigit) ||
    !isNumber(secondDigit) ||
    !possibleMathSigns.includes(mathSign)
  ) {
    return "Ошибка";
  }

  switch (mathSign) {
    case ">":
      return firstDigit > secondDigit;
    case "<":
      return firstDigit < secondDigit;
    case "=":
      return firstDigit === secondDigit;
    case "+":
      return firstDigit + secondDigit;
    case "-":
      return firstDigit - secondDigit;
    case "*":
      return firstDigit * secondDigit;
    case "/":
      return firstDigit / secondDigit;
    default:
      return "Ошибка";
  }
};*/


let mathSign = [">", "<", "=", "+", "-", "*", "/"];
const isNumber = function(item) {
  return !isNaN(item) && !isNaN(parseFloat(item))
};

//const isNumber = (item) => !isNaN(item) && !isNaN(parseFloat(item));

function getMathResult(expression) {
  let newExpression = [...expression];
  if (expression.length > 3) {
    newExpression = newExpression.filter(
      (item) => isNumber(item) || mathSign.includes(item));
  }

  const firstEl = Number(expression[0]);
  const secondEl = Number(expression[expression.length - 1]);
  const sing = newExpression[1];

  if (
    expression.length < 3 ||
    newExpression.length < 3 ||
    !isNumber(firstEl) ||
    !isNumber(secondEl) ||
    !mathSign.includes(sing)
  ) {
    return "Ошибка";
  }

  switch(sing) {
    case ">":
      return firstEl > secondEl;
    case "<":
      return firstEl < secondEl;
    case "=":
      return firstEl === secondEl;
    case "+":
      return firstEl + secondEl;
    case "-":
      return firstEl - secondEl;
    case "*":
      return firstEl * secondEl;
    case "/":
      return firstEl / secondEl;
    default:
      return "Ошибка";
  }
}


let result = getMathResult(["200", "+", 300]); // 500
console.log("result", result);
result = getMathResult(["20", "-", "5"]); // 15
console.log("result", result);
result = getMathResult([100, "/", 100]); // 1
console.log("result", result);
result = getMathResult([2, "-", 2]); // 0
console.log("result", result);
result = getMathResult(["5", ">", "10"]); // false
console.log("result", result);
result = getMathResult(["5", "<", "10"]); // true
console.log("result", result);
result = getMathResult(["1", "=", 1]); // true
console.log("result", result);
result = getMathResult(["1", "**", 1]); // 'Ошибка'
console.log("result", result);