/**
 * 문제
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

출력
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

예제입력
10
5
2
3
1
4
2
3
5
1
7

예제 출력
1
1
2
2
3
3
4
5
5
7
 */

// node.js로는 메모리 초과가 떠서 풀 수 없다고 한다.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const 정렬 = (arr) => arr.sort((a , b) => a - b)

let result = ''

정렬(input).map((item) => {
	result += item +'\n'
})

console.log(result);