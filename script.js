function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        return "go back to math class!";
    } else {
        return a / b;
    }
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let a = 0;
let b = 0;
let operator = null;
let displayNumber = null;

let buttons = document.querySelector(".buttons");
let display = document.querySelector(".display");

buttons.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
        if (e.target.id === "clear") {
            displayNumber = null;
            a = 0;
            b = 0;
            operator = null;
            display.textContent = displayNumber;
        } else if (e.target.id === "equals") {
            if (operator === null) {
                return;
            }
            b = displayNumber;
            displayNumber = operate(a, b, operator);
            display.textContent = displayNumber;
            a = 0;
            b = 0;
            operator = null;  
        } else if (e.target.id === "add" || e.target.id === "subtract" || e.target.id === "multiply" || e.target.id === "divide") {
            if (operator !== null) {
                b = displayNumber;
                displayNumber = operate(a, b, operator);
                display.textContent = displayNumber;
                a = 0;
                b = 0;
                operator = null;
            }
            a = displayNumber;
            operator = e.target.innerText;
            displayNumber = "";
        } else {
            if (displayNumber === null || displayNumber === "go back to math class!") {
                displayNumber = e.target.innerText;
            } else {
                displayNumber += e.target.innerText;
            }
            display.textContent = displayNumber;
        }
    }
})

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("equals").click();
    } else if (e.key === "Backspace") {
        e.preventDefault();
        document.getElementById("clear").click();
    } else if (e.key === "+") {
        e.preventDefault();
        document.getElementById("add").click();
    } else if (e.key === "-") {
        e.preventDefault();
        document.getElementById("subtract").click();
    } else if (e.key === "*") {
        e.preventDefault();
        document.getElementById("multiply").click();
    } else if (e.key === "/") {
        e.preventDefault();
        document.getElementById("divide").click();
    } else if (e.key === "0") {
        e.preventDefault();
        document.getElementById("zero").click();
    } else if (e.key === "1") {
        e.preventDefault();
        document.getElementById("one").click();
    } else if (e.key === "2") {
        e.preventDefault();
        document.getElementById("two").click();
    } else if (e.key === "3") {
        e.preventDefault();
        document.getElementById("three").click();
    } else if (e.key === "4") { 
        e.preventDefault();
        document.getElementById("four").click();
    } else if (e.key === "5") {
        e.preventDefault();
        document.getElementById("five").click();
    } else if (e.key === "6") {
        e.preventDefault();
        document.getElementById("six").click();
    } else if (e.key === "7") {
        e.preventDefault();
        document.getElementById("seven").click();
    } else if (e.key === "8") {
        e.preventDefault();
        document.getElementById("eight").click();
    } else if (e.key === "9") {
        e.preventDefault();
        document.getElementById("nine").click();
    }
})