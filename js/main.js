// # Traccia 1

// const firstUserNumber = parseInt(prompt("Inserisci un numero"));
// const secondUserNumber = parseInt(prompt("Inserisci un altro numero"));
// let randomNumber;

// if (firstUserNumber <= secondUserNumber) {
//   randomNumber =
//     Math.floor(Math.random() * (secondUserNumber - firstUserNumber)) +
//     firstUserNumber;
// } else if (secondUserNumber <= firstUserNumber) {
//   randomNumber =
//     Math.floor(Math.random() * (firstUserNumber - secondUserNumber)) +
//     secondUserNumber;
// }

// console.log(randomNumber);

// # Traccia 2

// const firstWord = prompt("Inserisci una parola");
// const secondWord = prompt("Inserisci un'altra parola");

// if (firstWord.length == secondWord.length) {
//   console.log(firstWord + " " + secondWord);
// } else if (firstWord.length > secondWord.length) {
//   console.log(firstWord);
// } else {
//   console.log(secondWord);
// }

// # Traccia 3

const numbers = [];
let arrayElementsSum = 0;

while (arrayElementsSum < 50) {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  numbers.push(userNumber);
  arrayElementsSum += userNumber;
}

console.log(numbers);
