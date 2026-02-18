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

function percent(num1, num2) {
    return num1/100*num2
}

function exponent(num1, num2) {
    return Math.pow(num1, num2)
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
        case "%":
            return percent(num1, num2)
        case "^":
            return exponent(num1, num2)
    }
}


let display = document.querySelector("#Display")
const allButtons = document.querySelectorAll("#mainContainer button")

let num1= ""
let num2= ""
let fullExpression = ""
let count = 0
let operator = ""
let answer = 0
let operatorCount = 0
/* Get num1 first */
allButtons.forEach(button => button.addEventListener("click", e => {
    let buttonClicked = e.target.textContent

    if ("+-×÷%^".includes(buttonClicked)) {
        operatorCount++
    }

    if (operatorCount === 2) {
        let parts = fullExpression.split(operator)
        console.log("Parts = " + parts)
        num1 = Number(parts[0])
        num2 = Number(parts[1])
        answer = operate(num1, operator, num2)
        fullExpression = answer
        operatorCount--
    }

    if (buttonClicked === "AC") {
        fullExpression = ""
        operatorCount=0
    }
    else if (buttonClicked === "=") {
        operatorCount--
        let parts = fullExpression.split(operator)
        num1 = Number(parts[0])
        num2 = Number(parts[1])
        answer = operate(num1, operator, num2)
        fullExpression = answer.toString()
    }
    else if (buttonClicked === "Del") {
        fullExpression = fullExpression.substring(0,(fullExpression.length-1))
    } 
    else {
        fullExpression += buttonClicked   
    }

    if (buttonClicked === "+") {
        operator = buttonClicked
    } else if (buttonClicked === "-") {
        operator = buttonClicked
    } else if (buttonClicked === "×") {
        operator = buttonClicked
    } else if (buttonClicked === "÷") {
        operator = buttonClicked
    } else if (buttonClicked === "%") {
        operator = buttonClicked
    } else if (buttonClicked === "^") {
        operator = buttonClicked
    }


    console.log("Start....Full expression = " + fullExpression)
    console.log("Operator = " + operator)
    console.log("Operator count = " + operatorCount)
    console.log("\n")

    display.textContent = fullExpression

}))
