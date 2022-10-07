/**
 * 문제
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

입력
알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

출력
입력으로 주어진 글자의 아스키 코드 값을 출력한다.

입력
A -> 64
C -> 67
0 -> 48
9 -> 57
 */

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const 대소문자변환 = (string) => {
	let result = ""
	const charCode = string.charCodeAt();
	if (charCode >= 65 && charCode <= 90) result = String.fromCharCode(charCode + 32)
	if (charCode >= 97 && charCode <= 122) result = String.fromCharCode(charCode - 32)
	return result
}

const result = input.split('').map((char) => 대소문자변환(char)).join('')
console.log(result);

// String.fromCharCode