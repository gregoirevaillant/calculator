const numberButtons = document.querySelectorAll("[dataNumber]");
const operatorButtons = document.querySelectorAll("[dataOperator]");
const equalsButton = document.querySelector("#equalsButton");
const clearButton = document.querySelector("#clearButton");
const decimalButton = document.querySelector("#decimalButton");

const displayFront = document.querySelector("#displayFront");
const displayBack = document.querySelector("#displayBack");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += button.textContent;
      displayFront.textContent = firstNumber;
      displayBack.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      displayFront.textContent = secondNumber;
      displayBack.textContent =
        firstNumber + " " + operator + " " + secondNumber + " = ";
    }
    if (result === "Infinity" || result === "NaN" || result === "undefined") {
      displayFront.textContent = "ERROR";
      displayBack.textContent = "";
      firstNumber = "";
      secondNumber = "";
      operator = "";
    }
    if (result !== "") {
      displayFront.textContent = button.textContent;
      displayBack.textContent = button.textContent;
      firstNumber = button.textContent;
      secondNumber = "";
      operator = "";
      result = "";
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
      result = operate(operator, Number(firstNumber), Number(secondNumber));
      result = Math.round(result * 100) / 100;
      displayBack.textContent =
        firstNumber + " " + operator + " " + secondNumber + " = ";
      displayFront.textContent = result;
      firstNumber = result;
      secondNumber = "";
      operator = button.textContent;
    } else if (firstNumber !== "" && secondNumber === "" && operator === "") {
      operator = button.textContent;
      displayBack.textContent = firstNumber + " " + operator;
      button.classList.add("active");
    }
  });
});

decimalButton.addEventListener("click", () => {
  if (operator === "") {
    if (firstNumber.includes(".")) {
      return;
    } else {
      firstNumber += ".";
      displayBack.textContent = firstNumber;
      displayFront.textContent = firstNumber;
    }
  } else {
    if (secondNumber.includes(".")) {
      return;
    } else {
      secondNumber += ".";
      displayBack.textContent =
        firstNumber + " " + operator + " " + secondNumber + " = ";
      displayFront.textContent = secondNumber;
    }
  }
});

equalsButton.addEventListener("click", () => {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    result = operate(operator, Number(firstNumber), Number(secondNumber));
    result = Math.round(result * 100) / 100;
    displayBack.textContent =
      firstNumber + " " + operator + " " + secondNumber + " = ";
    displayFront.textContent = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  displayBack.textContent = "";
  displayFront.textContent = "0";
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
