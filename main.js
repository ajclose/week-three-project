const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let displayContent = display.querySelector('h1')
let calculation = ''
let calculationSteps = []
let value = 0
let numbers = []
let operators = []
let operation;
let num1;
let num1Arr = []
let num2;
let num2Arr = []
let operationDefined = false;
function equal(num1, num2) {
    if (operation === "add") {
      return parseInt(num1) + parseInt(num2)
    } else if (operation === "minus") {
      return parseInt(num1) - parseInt(num2)
    } else if (operation === "multiply") {
      return parseInt(num1) * parseInt(num2)
    } else if (operation === "divide") {
      return parseInt(num1) / parseInt(num2)
    }
  }


for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  const content = button.querySelector('h1')
  button.addEventListener('click', function(event) {
    if (button.id === 'clear') {
      // content.textContent = ''
      numbers = []
      num1 = ''
      num2 = ''
      num1Arr = []
      num2Arr = []
      operationDefined = false
      operators = []
      calculation = ''
      operation = ''
      displayContent.textContent = 0
      console.log("cleared the contents!");

    } else if (button.id === "add") {
      console.log("add!");
      calculationSteps.push(calculation)
      calculation += '+'
      operation = "add"
      operationDefined = true;
      displayContent.textContent = calculation
    } else if (button.id === "minus") {
      console.log("subtract!")
      calculationSteps.push(calculation)
      calculation += '-'
      operation = "minus"
      operationDefined = true;
      displayContent.textContent = calculation
    } else if (button.id === "multiply") {
      console.log("multiply!")
      calculationSteps.push(calculation)
      calculation += '*'
      operation = "multiply"
      operationDefined = true;
      displayContent.textContent = calculation

    } else if (button.id === "divide") {
      console.log("divide!");
      calculationSteps.push(calculation)
      calculation += '/'
      operation = "divide"
      operationDefined = true;
      displayContent.textContent = calculation

    } else if (button.id === "equal") {
      calculation = equal(num1, num2)
      displayContent.textContent = calculation
      console.log("calculation:"+eval(calculation))
      console.log("calcuation:" + calculation);
      num1 = calculation
      num2 = ''
      num1Arr = []
      num2Arr = []
      operation=''
      console.log("num1: " + num1);
      console.log("num2: " + num2);
    } else {
      if (operationDefined) {
        num2Arr.push(content.textContent)
        console.log(num2Arr);
        num2=num2Arr.join('')
        // num2 += button.textContent
        console.log("num2 is " + num2);
        calculation += (content.textContent)
        console.log("evaluate:"+eval(calculation));
        displayContent.textContent = calculation
      } else {
        num1Arr.push(content.textContent)
        console.log(num1Arr);
        num1=num1Arr.join('')
        // num1 += button.textContent
        console.log("num1 is " + num1);
        calculation += (content.textContent)
        console.log("eval:"+eval(calculation));
        displayContent.textContent = calculation
      }
    }
  })
}

let random = [1,2,3]
console.log(random);
console.log(random.join(''));
