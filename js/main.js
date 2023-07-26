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

// const numbers = [];
// let arrayElementsSum = 0;

// while (arrayElementsSum < 50) {
//   const userNumber = parseInt(prompt("Inserisci un numero"));
//   numbers.push(userNumber);
//   arrayElementsSum += userNumber;
// }

// console.log(numbers);

// # Traccia 4

// const numbers = [];
// let arrayElementsSum = 0;

// while (arrayElementsSum < 50) {
//   const userNumber = parseInt(prompt("Inserisci un numero"));
//   numbers.push(userNumber);
//   arrayElementsSum += userNumber;
// }

// console.log(arrayElementsSum / numbers.length);

// # Traccia 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

for (let i = 0; i < numbers.length - 1; i++) {
  if (i % 2 != 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]
