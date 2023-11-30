function add(num1, num2){return num1 + num2;}
function subtract(num1, num2){return num1 - num2;}
function multiply(num1, num2){return num1 * num2;}
function divide(num1, num2){return num1 / num2;}
function power(num1, num2){return num1 ** num2;}
function mod(num1, num2){return num1 % num2;}
function sqrt(num1){return Math.sqrt(num1);}
//function factorial(num1){return factorial(num1);}


function calculate(expression) {
  const tokens = expression.split(' ');
  let num1;
  let num2;
  let operator;

  if(tokens.length === 2){
    operator = tokens[0];
    num1 = tokens[1];
  } else if (tokens.length === 3) {
    operator = tokens[1];
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    if(Number.isNaN(num1) || Number.isNaN(num2)){
      alert("You did not enter a valid number.");
      return ;
    }
  } else {
      alert('Invalid expression');
      return;
  }
  
  if(operator === 'sqrt') {
    return sqrt(num1);
  } 
  else if (operator === '+') {
    return add(num1, num2);
  }
  else if (operator === '-') {
    return subtract(num1, num2);
  }
  else if (operator === '*') {
    return multiply(num1, num2);
  }
  else if (operator === '/') {
    return divide(num1, num2);
  }
  else if (operator === '^') {
    return power(num1, num2);
  }
  else if (operator === '%') {
    return mod(num1, num2);
  }
  else {
    alert('Invalid expression');
    return;
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
