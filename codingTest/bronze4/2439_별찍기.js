/**
 * 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

5

    *
   **
  ***
 ****
*****
 */

// 인자 :number
// 반환 :string
// (index)만큼 별을 "*" + (인자-index)만큼 " " 
// 
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const writeStar = (number) => {
	let i = 1
	while ( i < number + 1) {
		const stars = "*".repeat(i)
		const space = " ".repeat(number - i)
		console.log(space+stars);
		i++;
	}
}


writeStar(Number(input));

// 다른 사람 답

//for문
const writeStar2 = (number) => {
	let result = '';
let blank = '';
for (let i = 1; i <= number; i++){
  result += "*";
  for (let j = 0; j < number-i; j++){
    blank += ' ';
  }
  console.log(blank + result);
  blank = '';
}

}
//fill, join
const writeStar3 = (number) => {
	// 인자만큼 공백이 찬 array를 만든다.
	//[ ' ', ' ', ' ', ' ', ' ' ]
	let star = new Array(number).fill(' ');

	for (let i = number - 1; i >= 0; i--) {
		//배열 마지막쪽부터 별을 채운다.
		star[i] = '*';
		//배열을 합쳐서 하나의 string으로 만든다.
		console.log(star.join(''));
	}
}

writeStar(5);