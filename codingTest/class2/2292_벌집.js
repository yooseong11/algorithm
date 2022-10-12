/**
 * 문제

위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

입력
첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.

출력
입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

예제입출력
13 -> 3
 */
// 입력: number
// 출력: number
// 6n 범위 구하기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 시간초과?
const 벌집 = (number) => {
  let i = 0;
  let temp = 1;
  while (true) {
    temp = temp + 6 * i;
    const first = temp;
    const second = 6 * (i + 1) + temp;
    if (number > first && number <= second) {
      i++;
      break;
    }
    i++;
  }
  // 첫번째 1번방 값을 안 넣어서 +1
  return i + 1;
};

console.log(벌집(Number(input)));

// 재시도

const 벌집 = (number) => {
  let i = 0;
  let first = 1;
  let second = 7;
  while (number >= second) {
    first = second;
    second += 6 * (i + 1);
    i++;
  }

  // 첫번째 1번방 값을 안 넣어서 +1
  return i + 1;
};

console.log(벌집(Number(input)));

// 남의 답 구경

const 벌집 = (number) => {
  let range = 1,
    block = 1;
  while (block < number) {
    block += 6 * range;
    range++;
  }
  return range;
};

console.log(벌집(Number(input)));
