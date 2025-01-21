function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error('Input must be a positive integer.');
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Prints 1, 2, 3, 4, 5

try {
  printNumbers(-1); // Throws an error
} catch (error) {
  console.error(error.message); // Prints 'Input must be a positive integer.'
} 