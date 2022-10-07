/**
 * 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	228824	141406	118611	62.603%
문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
 */
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const writeStar = (number) => {
	let result = ""
	i = 1
	while (i <= number) {
		result += "*".repeat(i) + "\n" 
		i++;
	}
	return result
}

console.log(writeStar(Number(input)));