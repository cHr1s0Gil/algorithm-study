/* 
    https://www.acmicpc.net/problem/1260
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n"); // 테스트용 파일
// const input = fs.readFileSync('dev/stdin').toString().split('\n'); // 백준 제출용 코드
const [vertexSize, edgeSize, startEdge] = input.shift().split(" ").map(Number);
const graph = Array.from(Array(vertexSize + 1), () => Array(vertexSize + 1).fill(0));
const bfsResult = [];
const dfsResult = [];
const bfsVisited = new Array(vertexSize + 1).fill(false);
const dfsVisited = new Array(vertexSize + 1).fill(false);


for(let i = 0; i < edgeSize; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    graph[start][end] = 1;
    graph[end][start] = 1;
}

const dfs = (edgeNum) => {
    dfsResult.push(edgeNum);
    dfsVisited[edgeNum] = true;

    for(let i = 1; i <= vertexSize; i++) {
        if(!dfsVisited[i] && graph[edgeNum][i] === 1)
            dfs(i);
    }
}

const bfs = (edgeNum) => {
    const bfsQueue = [];
    bfsQueue.push(edgeNum);
    bfsVisited[edgeNum] = true;

    while(bfsQueue.length > 0) {
        const edge = bfsQueue.shift();
        bfsResult.push(edge);
        bfsVisited[edge] = true;

        for(let i = 1; i <= vertexSize; i++) {
            if(!bfsVisited[i] && graph[edge][i] === 1) {
                bfsQueue.push(i);
                bfsVisited[i] = true;
            }
        }
    }
}

dfs(startEdge);
console.log(dfsResult.join(" "));
bfs(startEdge);
console.log(bfsResult.join(" "));