const firstUserNumber = parseInt(prompt("Inserisci un numero"));
const secondUserNumber = parseInt(prompt("Inserisci un altro numero"));
let randomNumber;

if (firstUserNumber <= secondUserNumber) {
  randomNumber =
    Math.floor(Math.random() * (secondUserNumber - firstUserNumber)) +
    firstUserNumber;
} else if (secondUserNumber <= firstUserNumber) {
  randomNumber =
    Math.floor(Math.random() * (firstUserNumber - secondUserNumber)) +
    secondUserNumber;
}

console.log(randomNumber);
