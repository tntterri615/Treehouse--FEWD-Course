
// beginning of quiz, nothing answered yet
var numberCorrect = 0;

var questionOne = prompt('Is the sky blue?');
if (questionOne.toLowerCase() === 'yes') {
    numberCorrect += 1;
    prompt('You have ' + numberCorrect + ' answers correct');
}
var questionTwo = prompt('Is the grass green?');
if (questionTwo.toLowerCase() === 'yes') {
    numberCorrect += 1;
    prompt('You have ' + numberCorrect + ' answers correct');
}
var questionThree = prompt('Is the sun hot?');
if (questionThree.toLowerCase() === 'yes') {
    numberCorrect += 1;
    prompt('You have ' + numberCorrect + ' answers correct');
}
var questionFour = prompt('Is the ocean big?');
if (questionFour.toLowerCase() === 'yes') {
    numberCorrect += 1;
    prompt('You have ' + numberCorrect + ' answers correct');
}
var questionFive = prompt('Is the snow cold?');
if (questionFive.toLowerCase() === 'yes') {
    numberCorrect += 1;
    prompt('You have ' + numberCorrect + ' answers correct');
}

if (numberCorrect === 5) {
    document.write('you got a gold crown');
} else if (numberCorrect => 3 && numberCorrect <=4) {
    document.write('you got a silver crown');
} else {
    document.write('you got a bronze crown');
}
