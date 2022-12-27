const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const size = input.shift();
const numArr = input.map(Number);

console.log(numArr.sort());