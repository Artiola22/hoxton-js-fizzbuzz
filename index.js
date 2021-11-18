const listOfNumbers = [];

for (let i = 1; i <= 100; i++) {
  listOfNumbers.push(i);
}

for (const number of listOfNumbers) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log("fizzbuzz");
  } else if (number % 3 === 0) {
    console.log("fizz");
  } else if (number % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(number);
  }
}