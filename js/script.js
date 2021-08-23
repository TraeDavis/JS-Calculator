// Get each button 
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals-btn');
const clearButton = document.getElementById('clear-btn');
const pointButton = document.getElementById('point-btn');
const percentButton = document.getElementById('percent-btn');
const negPosButton = document.getElementById('neg-pos-btn');
const display = document.getElementById('display');

// loop through each number and add event listener to display number on click
numberButtons.forEach((button) => {
    button.addEventListener('click', () => displayNumber(button.textContent));
});

// be able to add float numbers
pointButton.addEventListener('click', ()=>{
    if(display.textContent.includes('.')){
        return;
    }
    display.textContent += pointButton.textContent;
});
// function to display value clicked
function displayNumber(number){
    // if screen only has 0 than replace with nothing than enter number clicked
    if(display.textContent === '0'){
        display.textContent = '';
    }
    return display.textContent += number;
}
// be able to make numbers negative or positive
negPosButton.addEventListener('click', () => {
    let strToNum = Number(display.textContent);
    
    (strToNum > 0) ? 
    display.textContent = -strToNum :
    display.textContent = Math.abs(strToNum);
});
// clear display screen and values
clearButton.addEventListener('click', ()=> {
    display.textContent = 0;
});

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
function percentage(a){
    return a/100;
}

function operate(operator,a,b ){

}