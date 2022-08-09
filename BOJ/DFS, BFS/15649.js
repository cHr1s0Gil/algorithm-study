/* 
    자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
    1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
*/

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [rowSize, colSize] = input.shift().split(' ').map(Number);
const visited = new Array(rowSize).fill(false);
const numStr = []; // 각 자리수 별 문자 저장


const dfs = (cnt) => {
    // 숫자가 4자리 모두 차면 출력
    if (cnt === colSize) {
        console.log(numStr.join(" "));
        return;
    }

    // 1 ~ 입력받은 수 까지 반복하며 탐색하지 않았으면 문자열에 추가
    for (let i = 0; i < rowSize; i++) {
        if (!visited[i]) {
            visited[i] = true;
            numStr[cnt] = i + 1;
            dfs(cnt + 1);
            visited[i] = false;
        }
    }
}

dfs(0);