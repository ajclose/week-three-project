let calculation = ''
let operation = ''
let answer = false
let squareRoot = false
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
    calculation += "√"
    operation += "Math.sqrt("
    squareRoot = true;
  } else {
    calculation += operator
    operation += operator
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
      operation = ''
      squareRoot = false
      answer = false
      displayContent.textContent = 0


    } else if(button.id === "equal") {
      answer = true

      if (squareRoot) {
        operation += ")"
        operation = eval(operation)
        calculation = operation
        displayContent.textContent = calculation
        squareRoot = false
      }

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
      calculation += "√"
      operation += "Math.sqrt("
      displayContent.textContent = calculation
      squareRoot = true
      answer = false

    } else {
      if (answer) {
        calculation = content.textContent
        displayContent.textContent = calculation
        operation = content.textContent
        answer = false
      } else {
        calculation += content.textContent
        displayContent.textContent = calculation
        operation += content.textContent
        answer = false
      }

    }
  })
}
