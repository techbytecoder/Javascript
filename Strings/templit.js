let username = `Rambo`;

document.write(`Hello, ${username}`+'<br/>');
document.write(`What's Up, ${username.toUpperCase()}`+'<br/>');

let numeroUno = parseFloat(prompt('Enter a number!'));
let numeroDos = parseFloat(prompt('Enter a number!'));
let sum = numeroUno + numeroDos;
document.write(`You entered ${numeroUno} and second number ${numeroDos}, your total is ${sum}.`);