const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [groundSize, trainerNum] = input.shift().split(" ").map(Number);
const ground = input.shift().split(" ").map(Number);
const groundSum = new Array(groundSize).fill(0);
const [...orders] = input;

for(let i = 0; i < trainerNum; i++) {
    const [a, b, k] = orders[i].split(" ").map(Number);
    groundSum[a - 1] += k;
    groundSum[b] -= k;
}

for(let i = 1; i < groundSize; i++) {
    groundSum[i] += groundSum[i - 1];
}

for(let i = 0; i < groundSize; i++)
    ground[i] += groundSum[i];

console.log(ground.join(" "));