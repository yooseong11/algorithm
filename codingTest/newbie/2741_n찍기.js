/**
 * 문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

예제입력
5  

예제출력
1
2
3
4
5
 */
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n찍기 = (number) => {
	let result = ""
	let i = 1;
	while (i <= number) {
		result += i + '\n'
		i++
	}
	return result;
}

console.log(n찍기(Number(input)));