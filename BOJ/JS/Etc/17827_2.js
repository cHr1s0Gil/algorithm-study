"use strict";
var fs = require("fs");
//const input = fs.readFileSync('/dev/stdin/').toString().split('\n');
var input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
var _a = input.shift().trim().split(" ").map(Number), nodeSize = _a[0], ansSize = _a[1], cycleIdx = _a[2];
var data = input.shift().trim().split(" ").map(Number);
var index = input.map(Number);
var findData = function (index) {
    var result = 0;
    if (index < nodeSize)
        result = data[index];
    else {
        var cycle = cycleIdx - 1;
        var temp = (index - nodeSize) % (nodeSize - cycle) + cycle;
        result = data[temp];
    }
    console.log(result);
};
// console.log(index);
index.forEach(function (elem) {
    findData(elem);
});
