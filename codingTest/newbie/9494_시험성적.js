const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()

const getGrade = (number) => {
	let result ="F"
	if(number <= 100 && number >=90) result = "A"
	if(number < 90 && number >=80) result = "B"
	if(number < 80 && number >=70) result = "C"
	if(number < 70 && number >=60) result = "D"
	return result;
}
console.log(getGrade(input));