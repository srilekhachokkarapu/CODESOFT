const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = null;
let previousValue = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      currentInput = '';
      operator = null;
      previousValue = null;
    } else if (button.id === 'equals') {
      if (operator && previousValue) {
        const currentValue = parseFloat(currentInput);
        switch (operator) {
          case '+':
            currentInput = (previousValue + currentValue).toString();
            break;
          case '-':
            currentInput = (previousValue - currentValue).toString();
            break;
          case '*':
            currentInput = (previousValue * currentValue).toString();
            break;
          case '/':
            if (currentValue === 0) {
              currentInput = 'Error'; // Handle division by zero
            } else {
              currentInput = (previousValue / currentValue).toString();
            }
            break;
        }
        operator = null;
        previousValue = null;
      }
    } else if (button.classList.contains('operator')) {
      operator = button.textContent;
      previousValue = parseFloat(currentInput);
      currentInput = '';
    } else {
      currentInput += button.textContent;
    }

    display.value = currentInput;
  });
});