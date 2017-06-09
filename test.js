let calculation = ''
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let displayContent = display.querySelector('h1')

function checkPreviousOperation(operator) {
  const calculationLast = calculation[calculation.length-1]
  if  (calculationLast==="+"||calculationLast==="-"||calculationLast==="*"||calculationLast==="/"||calculationLast==="%"||calculationLast==="√") {
    calculation = calculation.split('')
    calculation[calculation.length-1] = operator
    calculation = calculation.join('')
  } else {
    calculation += operator
    console.log(calculation);
  }
  }


for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  const content = button.querySelector('h1')
  button.addEventListener('click', function(event) {
    if(button.id === "clear") {
      // displayContent.textContent = 0
      calculation = ''
      displayContent.textContent = calculation
      console.log("cleared!");
    } else if(button.id === "equal") {
      console.log("calculating...");
      if ((eval(calculation))%1 === 0) {
        calculation = eval(calculation)
        displayContent.textContent = calculation
      } else {
        if((eval(calculation)%1).toString().length>4) {
        calculation = (eval(calculation)).toFixed(4)
        displayContent.textContent = calculation
    } else {
      calculation = eval(calculation)
      displayContent.textContent = calculation
      console.log(calculation);
    }
    }
    } else if(button.id ===  "add") {
      checkPreviousOperation("+")
      displayContent.textContent = calculation
    } else if(button.id ===  "minus") {
      checkPreviousOperation("-")
      displayContent.textContent = calculation
    } else if(button.id ===  "multiply") {
      checkPreviousOperation("*")
      displayContent.textContent = calculation
    } else if(button.id ===  "divide") {
      checkPreviousOperation("/")
      displayContent.textContent = calculation
    } else if(button.id ===  "modulo") {
      checkPreviousOperation("%")
      displayContent.textContent = calculation
    // } else if(button.id ===  "square-root") {
    //   if (calculation) {
    //     calculation = eval(calculation)
    //     calculation = Math.sqrt(calculation)
    //     displayContent.textContent = calculation
    //   } else {
    //     displayContent.textContent = "√"
    //   calculation =
    //   calculation = Math.sqrt(calculation)
    //   displayContent.textContent = calculation
    } else {
      console.log(content.textContent);
      calculation += content.textContent
      displayContent.textContent = calculation
    }
  })
}
