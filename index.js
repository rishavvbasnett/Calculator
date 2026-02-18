function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return (num1/num2).toFixed(2)
}

function operate(num1, operator, num2){
    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1,num2)            
        case "×":
            return multiply(num1, num2)           
        case "÷":
            return divide(num1, num2)
    }
}


let display = document.querySelector("#Display")
const allButtons = document.querySelectorAll("#mainContainer button")

let num1= ""
let operatorIcon = ""
let num2= ""
let fullExpression = ""
let count = 0
let operator = ""
answer = 0
/* Get num1 first */
allButtons.forEach(button => button.addEventListener("click", e => {
    let buttonClicked = e.target.textContent

    if (buttonClicked === "AC") {
        fullExpression = ""
    }
    else if (buttonClicked === "=") {
        let parts = fullExpression.split(operator)
        num1 = Number(parts[0])
        num2 = Number(parts[1])
        answer = operate(num1, operator, num2)
        fullExpression = answer
    }
    else if (buttonClicked === "Del") {
        fullExpression = fullExpression.substring(0,(fullExpression.length-1))
    } 
    else {
        fullExpression += buttonClicked   
    }

    if (buttonClicked === "+") {
        operator = "+"
    }  else if (buttonClicked === "-") {
        operator = "-"
    } else if (buttonClicked === "×") {
        operator = "×"
    } else if (buttonClicked === "÷") {
        operator = "÷"
    }

    console.log(fullExpression)
    display.textContent = fullExpression

}))
