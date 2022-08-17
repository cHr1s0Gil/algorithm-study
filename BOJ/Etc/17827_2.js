"use strict";
const fs = require("fs");
//const input = fs.readFileSync('/dev/stdin/').toString().split('\n');
const input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
const [nodeSize, ansSize, cycleIdx] = input.shift().trim().split(" ").map(Number);
const data = input.shift().trim().split(" ").map(Number);
const index = input.map(Number);
const findData = (index) => {
    let result = 0;
    if (index < nodeSize)
        result = data[index];
    else {
        const cycle = cycleIdx - 1;
        const temp = (index - nodeSize) % (nodeSize - cycle) + cycle;
        result = data[temp];
    }
    console.log(result);
};
// console.log(index);
index.forEach(elem => {
    findData(elem);
});
