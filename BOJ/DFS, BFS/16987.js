/* 
    https://www.acmicpc.net/problem/16987
*/



const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const eggNum = Number(input.shift());
const size = 4
const eggs = Array.from( { length: size }, (value, idx) => idx );
const visited = new Array(size).fill(false);

const dfs = (index) => {
    for(let i = index + 1; i < size; i++) {
        if(!visited[i]) {
            visited[i] = true;
            console.log(index, i);
            dfs(index + 1);
            visited[i] = false;
        }
    }
}

dfs(0);