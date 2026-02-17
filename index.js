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
        case "*":
            return multiply(num1, num2)           
        case "/":
            return divide(num1, num2)
    }
}

/* Make objects from all the buttons */

/* Numbers */
const no0 = document.querySelector("#b0")
const no1 = document.querySelector("#b1")
const no2 = document.querySelector("#b2")
const no3 = document.querySelector("#b3")
const no4 = document.querySelector("#b4")
const no5 = document.querySelector("#b5")
const no6 = document.querySelector("#b6")
const no7 = document.querySelector("#b7")
const no8 = document.querySelector("#b8")
const no9 = document.querySelector("#b9")

/* operators/signs */
const divideSign = document.querySelector("#bDivide")
const multiplySign = document.querySelector("#Multiply")
const subtractSign = document.querySelector("#Subtract")
const addSign = document.querySelector("bAdd")
const equalSign = document.querySelector("#bOperate")

/* Extras */
const deleteSign = document.querySelector("#bDelete")
const ac = document.querySelector("#bAC")
const percentSign = document.querySelector("#bPercent")
const plusMinus = document.querySelector("#bSign")
const decimal = document.querySelector("#bDecimal")


let display = document.querySelector("#Display")

const allNumbers = document.querySelectorAll("#mainContainer button")
allNumbers.forEach(button=> {
    button.addEventListener("click", e=> {
        let buttonClicked = e.target.textContent
        display.textContent = buttonClicked
    })
})

