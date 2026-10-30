let displayCalculations = document.querySelector('.js-display-calculations');
let displayResult = document.querySelector('.js-display-result');
let equalButton = document.querySelector('.js-equal-button');
let numButtons = document.querySelectorAll('.js-calc-buttons');
let cButton = document.querySelector('.js-c-button');
let subtractionButton = document.querySelector('.js-subtract-button');
let additionButton = document.querySelector('.js-addition-button');
let divideButton = document.querySelector('.js-divide-button');
let multiplyButton = document.querySelector('.js-multiply-button');
let delButton = document.querySelector('.js-del-button');

let result = '';

numButtons.forEach((value) => {
    value.addEventListener('click', () => {
        result += `${value.innerHTML}`;
        displayCalculations.innerHTML = result;
    });
});

cButton.addEventListener('click', () => {
    result = '';
    displayCalculations.innerHTML = result;
    displayResult.innerHTML = '';
});

subtractionButton.addEventListener('click', () => {
    result += ' - ';
    displayCalculations.innerHTML = result;
});

additionButton.addEventListener('click', () => {
    result += ' + ';
    displayCalculations.innerHTML = result;
});

multiplyButton.addEventListener('click', () => {
    result += ' * ';
    displayCalculations.innerHTML = result;
});

divideButton.addEventListener('click', () => {
    result += ' / ';
    displayCalculations.innerHTML = result;
});

equalButton.addEventListener('click', () => {
    const output = eval(result);
    displayResult.innerHTML = output;
    result = '';
});

delButton.addEventListener('click', () => {
    const newResult = result.slice(0, -1);
    result = newResult;
    displayCalculations.innerHTML = result;
});
