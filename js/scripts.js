const previewsOperationText = document.querySelector ("#previews-operation");
const currentOperationText = document.querySelector ("#current-operation");
const buttons = document.querySelectorAll ("#buttons-container button");

class Calculator {
    constructor(previewsOperationText, currentOperationText) {
        this.previewsOperationText = previewsOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = " ";
    }

    //add digit to calculator screen
    addDigit(digit) {
        //check if current operation already has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

    this.currentOperation = digit;
    this.updateScreen();
}

//process all calculator operations
processOperation(operation) {

    // get current and previews value
    let operationValue;
    const previews = +this.previewsOperationText.innerText.split(" ")["0"];
    const current = +this.currentOperationText.innerText;

    switch(operation) {
        case "+":
            operationValue = previews + current;
            this.updateScreen(operationValue, operation, current, previews);
            break;
        case "-":
            operationValue = previews - current;
            this.updateScreen(operationValue, operation, current, previews);
            break;
        case "/":
            operationValue = previews / current;
            this.updateScreen(operationValue, operation, current, previews);
            break;
        case "*":
            operationValue = previews * current;
            this.updateScreen(operationValue, operation, current, previews);
            break;
        case "DEL":
                this.processDelOperator();
            break;
        case "CE":
                this.processClearCurrentOperator();
            break;
        case "C":
                this.processClearOperator();
            break;
        case "=":
                this.processEqualOperator();
            break;
        default:
            return;
    }
}

    //change values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previews = null
    ) {
        console.log(operationValue, operation, current, previews);

        if (operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // check if value is zero, if it is just add current value
            if (previews === 0) {
                operationValue = current;
            }
            // add current value to previews
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }
}

const calc = new Calculator(previewsOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
        calc.addDigit(value);
        } else {
        calc.processOperation(value);
        }
    });
});
