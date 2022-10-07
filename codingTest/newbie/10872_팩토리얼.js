/**
 * 문제
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.

출력
첫째 줄에 N!을 출력한다.

예제
10 -> 3628800
0 -> 1
 */

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const 팩토리얼 = (number) => {
	let result = 1
	let i = 1
	while (i <= number) {
		result *= i
		i++
	}
	return result
}

console.log(팩토리얼(Number(input)));