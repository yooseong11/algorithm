/**
 * 문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.

예제 입력 1 
1
1

예제 출력 1
1

예제 입력 2
5
54321

예제 출력 2
15

예제 입력 3
25
7000000000000000000000000

예제 출력 3
7

예제 입력 4
11
10987654321

예제 출력 4
46

 */

// 제출 코드
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const sumNumber = (string) => {
	const [개수, 숫자] = string.split('\n')
	let value = 0
	const sum = 숫자.split('').reduce(
		(prev, current) => Number(prev) + Number(current), value
	)
	return sum
}

console.log(sumNumber(input));

//수정 코드
const sumNumber2 = (string) => {
	const [개수, numbers] = string.split('\n')
	const sum = numbers.split('').reduce(
		(prev, current) => Number(prev) + Number(current), 0//초기값 설정
	)
	return sum
}
// 초기값 외부선언하지 말고 함수 내부 선언

//다른 방식 코드 for of
const sumNumber = (string) => {
	let sum = 0;
	const [개수, 숫자] = string.split('\n')
	for (const num of 숫자) {
		sum += Number(num);
	}
	return sum;
}

// 음... 괜히 split로 array 변환 하는 것보다 이게 더 간결한 것 같다.