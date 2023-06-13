const height = 5; // Specify the height of the hollow isosceles triangle
const baseWidth = 2 * height - 1; // Calculate the width of the triangle's base
let triangle = '';

for (let i = 1; i <= height; i++) {
  const numX = 2 * i - 1; // Calculate the number of "x" characters in the current row
  const numSpaces = (baseWidth - numX) / 2; // Calculate the number of spaces in each row

  let row = ' '.repeat(numSpaces);
  row += i === 1 || i === height ? 'x'.repeat(numX) : 'x' + ' '.repeat(numX - 2) + 'x';
  row += ' '.repeat(numSpaces);

  triangle += row + '\n';
}

console.log(triangle);
