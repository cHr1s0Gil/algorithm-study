/* 
    https://www.acmicpc.net/problem/2606
    신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다. 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
    1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력한다.
*/
const fs = require('fs');
// const input = fs.readFileSync('2606.txt').toString().split('\n'); // 테스트용 파일
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const vertexSize = parseInt(input.shift());
const edgeSize = parseInt(input.shift());
// 그래프 배열 초기화
const graph = [...new Array(vertexSize + 1)].map(() => []);
const visited = new Array(vertexSize).fill(false);
let count = 0;

// 그래프 초기화
const graph_init = () => {
    for(let i = 0; i < edgeSize; i++) {
        const [start, end] = input[i].split(' ').map(Number);
        graph[start].push(end);
        graph[end].push(start);
    }
}

const dfs = (n) => {
    // 이미 탐색한 적이 있으면 작업을 수행하지 않음
    if(visited[n]) return;
    
    // 탐색한 적이 없으면 감염 횟수를 증가시키고 방문을 true로 변경
    count++;
    visited[n] = true;

    // 해당 컴퓨터와 연결된 컴퓨터를 모두 탐색
    for(let i = 0; i < graph[n].length; i++)
        dfs(graph[n][i]);
}

graph_init();
dfs(1);
console.log(count - 1);