/* 
    https://www.acmicpc.net/problem/6603
*/

const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");
const result = [];

const dfs = (cnt, k) => {
    if(cnt === k) {
        console.log(result.join(" "));
        return;
    }
}

for(let i = 0; i < input.length; i++) {
    const [k, ...S] = input[i].split(" ").map(Number);
    const visited = new Array(k).fill(false);
    
    dfs(0);
}