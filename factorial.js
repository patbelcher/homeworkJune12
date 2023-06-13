function calculateFactorial(number) {
  let factorial = 1;

  // Calculate factorial using a for loop
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

const number = 10;
const factorial = calculateFactorial(number);
console.log(`The factorial of ${number} is ${factorial.toLocaleString()}`);
