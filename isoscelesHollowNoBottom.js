const height = 6; // Specify the height of the hollow isosceles triangle
const maxSpaces = height - 1; // Maximum number of spaces in the top row
let triangle = '';

for (let i = 1; i <= height - 1; i++) {
  let row = '';

  for (let j = 1; j <= maxSpaces; j++) {
    // Add spaces before the first "x" character
    if (j <= maxSpaces - i) {
      row += ' ';
    } else {
      // Add the "x" characters for the sides of the triangle
      if (i === 1 || j === maxSpaces || j === maxSpaces - i + 1) {
        row += 'x';
      } else {
        // Add spaces for the hollow part inside the triangle
        row += ' ';
      }
    }
  }

  triangle += row + '\n';
}

console.log(triangle);
