const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const 사분면고르기 = (array) => {
	const [x, y] = array;
	let result = 0;
	if (x > 0 && y > 0) result = 1;
	if (x < 0 && y > 0) result = 2;
	if (x < 0 && y < 0) result = 3;
	if (x > 0 && y < 0) result = 4; 
	return result;
}

console.log(사분면고르기(input));