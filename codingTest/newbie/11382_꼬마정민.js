const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [A, B, C] = input

console.log(Number(A)+Number(B)+Number(C));