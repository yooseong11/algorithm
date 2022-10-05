/*문제
영문 문장을 입력받아 모음의 개수를 세는 프로그램을 작성하시오. 모음은 'a', 'e', 'i', 'o', 'u'이며 대문자 또는 소문자이다.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄마다 영어 대소문자, ',', '.', '!', '?', 공백으로 이루어진 문장이 주어진다. 각 줄은 최대 255글자로 이루어져 있다.

입력의 끝에는 한 줄에 '#' 한 글자만이 주어진다.

출력
각 줄마다 모음의 개수를 세서 출력한다.

예제
How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#

7
14
9
*/


// 인장 : 영어 문장
// 문장을 소문자로 변환
// 문장을 순회하며 "a" 개수 확인
// #을 만나면 종료
// 반환 : 모음의 개수
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getCount = (arg) => {
  const sentence = arg.toLowerCase()
	let count = 0
	console.log(sentence);
	if (sentence.includes("#")) return;
	
	const 개수 = sentence.match(/a|e|i|o|u/g)
	count = 개수.length
	console.log(count);
};

getCount(input);