
const row = 4;
const col = 5;
let numbers = [];

for (let i = 0; i < row; i++) {
  numbers.push([]);
}

let count = 1;
for (let j = 0; j < col; j++) {
  for (let i = 0; i < row; i++) {
    numbers[i][j] = count;
    count++;
  }
 
}

console.log(numbers);
