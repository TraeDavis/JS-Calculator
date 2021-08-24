// Get each button 
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals-btn');
const clearButton = document.getElementById('clear-btn');
const pointButton = document.getElementById('point-btn');
const deleteButton = document.getElementById('delete-btn');
const negPosButton = document.getElementById('neg-pos-btn');
const display = document.getElementById('display');
const currentOperation = document.getElementById('current-operation');
// create variables for numbers and operation
let firstNumber = '';
let secondNumber = '';
let currentOp = '';

// loop through each number and add event listener to display number on click
numberButtons.forEach((button) => {
    button.addEventListener('click', () => displayNumber(button.textContent));
});
// be able to make numbers negative or positive
negPosButton.addEventListener('click', () => {
    let strToNum = Number(display.textContent);
    // if the number is greater than 0 then make negative and if not make positve
    (strToNum > 0) ? 
    display.textContent = -strToNum :
    display.textContent = Math.abs(strToNum);
});
// loop through each number and add event listener to display number on click
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent));
});
// be able to add float numbers
pointButton.addEventListener('click', ()=>{
    // if the number already contains a . then dont add another
    if(display.textContent.includes('.')){
        return;
    }
    display.textContent += pointButton.textContent;
});
// event listener for delete button
deleteButton.addEventListener('click', deleteNum);
// event listener for evaluating equation
equalsButton.addEventListener('click', evaluate);
// clear display screen and values
clearButton.addEventListener('click', resetScreen);
// reset screen and values on AC click
function resetScreen(){
    currentOperation.textContent = '';
    display.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    currentOp = '';
}
// set operator and first number for equation
function setOperation(op){
    // if a currentOp exists then run nextOperation function
    if(currentOp){
        nextOperation();
    }
    // set firstNumber and currentOp
    firstNumber = display.textContent;
    currentOp = op;
    // reset display to 0
    display.textContent = 0;
    displayOperation();
}
// function to display value clicked
function displayNumber(number){
    // if screen only has 0 than replace with nothing than enter number clicked
    if(display.textContent === '0'){
        display.textContent = '';
    }

    return display.textContent += number;
}

function displayOperation(){
    currentOperation.textContent = `${firstNumber} ${currentOp} ${secondNumber}`;
}
// get firstNumber, currentOp, and secondNumber and pass to operate function
function evaluate(){
    // stop from dividing by zero
    if (currentOp === '/' && display.textContent === '0') {
        alert("You can't divide by 0!")
        return;
    }else if(currentOp === ''){
        return;
    }
    // set secondNumber
      secondNumber = display.textContent;
    // set display back to 0
      display.textContent = 0;
      displayOperation();
    // send info and numbers to operate
      operate(currentOp, firstNumber,secondNumber);
}
// resets currentOp and secondNumber until new ones are given
function nextOperation(){
    currentOp = '';
    secondNumber = '';
    displayOperation();
}

function deleteNum(){
    // get current number
    let currentNum = display.textContent;
    // use slice to take away last number in string
    let deleteNum = currentNum.slice(0, -1);
    // if number length is 1 than return 0 on delete
    if(currentNum.length <= 1){
        return display.textContent = 0;
    }
    // display number after last number has been deleted
    display.textContent = deleteNum;
}
function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}


function operate(operator,a,b ){
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
          return display.textContent = (add(a, b));
        case '-':
          return display.textContent = (subtract(a, b));
        case '*':
          return display.textContent = (multiply(a, b));
        case '/':
          if (b === 0) return null
          else return display.textContent = (divide(a, b));
        default:
          return null
      }
}