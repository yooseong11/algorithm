/**
 * 문제
X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

입력
입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

출력
출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.

예제입력1
3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30

예제출력
2
8
 */
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const 과제안낸사람 = (arr) => {
	let result = ""
	const sorted = arr.sort((a, b) => a - b)
	let i = 0
	let count = 0
	while (i < 30) {
		const 숫자 = i + 1 + count
		if (숫자 > 30) break;

		if (Number(sorted[i]) !== 숫자) {
			count++
			result += 숫자 + "\n"
		}
		i++;
	}
	return result;
}
console.log(과제안낸사람(input));

//처음 적은 답

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const 과제안낸사람 = (arr) => {
	let result = ""
	const sorted = arr.sort((a, b) => a - b)
	let i = 0
	while (i < 30) {
		if (sorted[i + 1] - sorted[i] === 2) {
			result += (Number(sorted[i + 1]) + Number(sorted[i]))/ 2 + '\n'
		}
		i++;
	}
	return result;
}
console.log(과제안낸사람(input));

// 앞에 값과 뒤의 값을 빼기만 해서 1이나 30같은 경계값에서 오류남