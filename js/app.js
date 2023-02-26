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
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

let buttons = document.querySelectorAll('button');
let clickedValue = '';
let display = document.querySelector('#displayValue');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        clickedValue += e.target.innerText;
        display.innerText = clickedValue;
    });
    }
);

let operators = document.querySelectorAll('.operator');
let clickedOperator = '';

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        clickedOperator = e.target.innerText;
    });
    }
);

let equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    let values = clickedValue.split(clickedOperator);
    console.log(values);
    let a = parseFloat(values[0]);
    let b = parseFloat(values[1]);
    display.innerText = operate(clickedOperator, a, b);
    }   
);