let calculation = ''
let operation = []
let answer = false
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let displayContent = display.querySelector('h1')

function checkPreviousOperation(operator) {
  const calculationLast = calculation[calculation.length-1]
  if  (calculationLast==="+"||calculationLast==="-"||calculationLast==="*"||calculationLast==="/"||calculationLast==="%"||calculationLast==="√") {
    calculation = calculation.split('')
    calculation[calculation.length-1] = operator
    calculation = calculation.join('')
  } else if (operator === "√") {
    calculation += "Math.sqrt("
  } else {
    calculation += operator
    console.log(calculation);
  }
}

function evaluate(calculation) {
  calculation = calculation.join('')
  return eval(calculation)
}


for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  const content = button.querySelector('h1')
  button.addEventListener('click', function(event) {
    if(button.id === "clear") {
      calculation = ''
      displayContent.textContent = 0
      console.log("cleared!");
    } else if(button.id === "equal") {
      answer = true
      console.log(answer);
      console.log("calculating...");

      if((eval(calculation)%1).toString().length>4) {
        calculation = (eval(calculation)).toFixed(4)
        displayContent.textContent = calculation
    } else {
      calculation = eval(calculation)
      displayContent.textContent = calculation
    }

    } else if(button.id ===  "add") {
      checkPreviousOperation("+")
      displayContent.textContent = calculation
      answer = false
    } else if(button.id ===  "minus") {
      checkPreviousOperation("-")
      displayContent.textContent = calculation
      answer = false
    } else if(button.id ===  "multiply") {
      checkPreviousOperation("*")
      displayContent.textContent = calculation
      answer = false
    } else if(button.id ===  "divide") {
      checkPreviousOperation("/")
      displayContent.textContent = calculation
      answer = false
    } else if(button.id ===  "modulo") {
      checkPreviousOperation("%")
      displayContent.textContent = calculation
      answer = false
    } else if (button.id === "square-root") {
      checkPreviousOperation("√")
      displayContent.textContent = calculation
      answer = false

    } else {
      console.log(content.textContent);
      if (answer) {
        calculation = content.textContent
        displayContent.textContent = calculation
        answer = false
        console.log(answer);
      } else {
        calculation += content.textContent
        displayContent.textContent = calculation
        console.log(answer);
        answer = false
      }

    }
  })
}
