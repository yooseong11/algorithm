const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\n/);


const add = (num1, num2) => {
  return num1 + num2;
};

const arr2 = arr.map((element) => {
  const [num1, num2] = element.split(' ');
  return add(Number(num1), Number(num2));
});


let result = ''
for (const ele of arr2) {
	result += ele + '\n'
}
// 콘솔 로그는 딱 한 번만 사용하도록
console.log(result);