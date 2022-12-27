/* 
    https://www.acmicpc.net/problem/2579
    계단 오르기 게임은 계단 아래 시작점부터 계단 꼭대기에 위치한 도착점까지 가는 게임이다. <그림 1>과 같이 각각의 계단에는 일정한 점수가 쓰여 있는데 계단을 밟으면 그 계단에 쓰여 있는 점수를 얻게 된다.
    
    계단 오르는 데는 다음과 같은 규칙이 있다.
        1.계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
        2.연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
        3.마지막 도착 계단은 반드시 밟아야 한다.
*/
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n'); // 테스트용 파일
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const stairs = input.map(Number);

// 처음 한 칸 초기화
const DP = {
    0: 0,
    1: stairs[0]
};
// 두 번째 계단부터 바로 이전의 칸에서 올라오는 것과 2칸 전에서 올라오는 것 중 최대값을 저장
DP[2] = Math.max(DP[1] + stairs[1], stairs[1]);

// 바로 이전 계단에서 올라온 것이면 이전 계단은 2칸을 뛰어 온 것 이므로 이전 계단의 2계단 전의 합 + 이전 계단의 점수 + 현재 계단의 점수 ex) 5번 계단 = 4번 계단의 점수 + 2번 계단까지의 합
// 2계단을 뛰어서 올라온 것이라면 2계단 전의 합과 현재 계단의 점수를 더한다. ex) 5번 계단 = 3번 계단 까지의 합 + 5번 계단의 점수
// 두 가지 경우의 수 중에서 큰 값을 DP 배열에 저장
for(let i = 3; i <= n; i++) 
    DP[i] = Math.max(stairs[i - 2] + DP[i - 3] + stairs[i - 1], DP[i - 2] + stairs[i - 1]);

console.log(DP[n]);