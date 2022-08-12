// 누적 합 연습
const arr = Array.from({ length: 50 }, (value, idx) => idx + 1);
const pSum = new Array(50).fill(0);


pSum[0] = -1;
pSum[5] = 1;
pSum[0] += arr[0];
for(let i = 1; i < 50; i++) {
    pSum[i] += pSum[i - 1] + arr[i]; 
}

console.log(arr);
console.log(pSum);