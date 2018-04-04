var numberOne = parseInt(prompt('Choose a number greater than or equal to 0:'));
var numberTwo = parseInt(prompt('Now choose another number greater than your first number:'));
alert('Now, the computer will choose a random number in between your numbers:');

var randomNumber = Math.floor(Math.random() * (numberOne - numberTwo + 1)) + numberTwo;



alert(randomNumber);



