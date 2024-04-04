//simple calculator using JS and switch case

//we need this library module to accept user input
const prompt = require('prompt-sync')();

let results;

//accept the operator input
const operator = prompt('Enter operator (either +, -, * OR /): ');

//accept an operand input
const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

switch (operator)
{
    //addition formula
    case '+':
        results = num1 + num2;
        console.log(`${num1} + ${num2} = ${results}`);
    break;
    //subtraction formula
    case '-':
        results = num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`);
    break;
    //multiplication formula
    case '*':
        results = num1 * num2;
        console.log(`${num1} * ${num2} = ${results}`);
    break;
    //division formula
    case '/':
        results = num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`);
    break;
}