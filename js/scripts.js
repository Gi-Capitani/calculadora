const previewsOperationText = document.querySelector ("#previews-operation");
const currentOperationText = document.querySelector ("#current-operation");
const buttons = document.querySelectorAll ("#buttons-container button");

class Calculator {
    constructor(previewsOperationText, currentOperationText) {
        this.previewsOperationText = previewsOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
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
    processOperation(operation);
    console.log(operation);

    //change values of the calculator screen
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
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
