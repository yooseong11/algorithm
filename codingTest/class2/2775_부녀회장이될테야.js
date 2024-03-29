/**
 * 문제
평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

입력
첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다

출력
각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

제한
1 ≤ k, n ≤ 14

예제
2
1
3
2
3

출력
6
10
 */

//제출
const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
	const k = input.shift();
	const l = input.shift();

	const 부녀회장 = (floor, room) => {
		const APT = [];

		// 아파트에 필요한 층 수 만큼 빈 [] 추가
		let floorTemp = floor;
		while (floorTemp >= 0) {
			APT.push([]);
			floorTemp--;
		}
	
		// 0층 셋팅
		let n = 0;
		while (n < room) {
			APT[0][n] = n + 1;
			n++;
		}
		
		// 모든층 1호수 값 1로 셋팅
		let m = 0;
		while (m <= floor) {
			APT[m][0] = 1;
			m++;
		}
		
		// 1층부터 2호수 이상 값구하기
		let i = 1;
		while (i <= floor) {
			let j = 1;
			while (j < room) {
				APT[i][j] = APT[i][j - 1] + APT[i - 1][j];
				j++;
			}
			i++;
		}
		
		return APT[floor][room - 1];
	}
	console.log(
		부녀회장(k,l));
}


//고민 
// 외부에 for로 감싼 거 너무 무식하지 않나, input값 더 예쁘게 나눌 수 없을까 ?
// 0층이랑 1호수 값 설정한 것도 좀 무식한 것 같다. 수학 공식으로 예쁘게 풀 수 있을 듯