const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input.shift());
// 초기 2*1, 2*2는 미리 초기화
const DP = {
    1: 1,
    2: 2,
}

// 2*3 부터 2*n까지 n - 2 + n - 1의 횟수와 동일
for(let i = 3; i <= count; i++)
    DP[i] = (DP[i - 2] + DP[i - 1]) % 10007;

console.log(DP[count]);