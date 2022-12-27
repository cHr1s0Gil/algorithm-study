"use strict";
/*
    https://www.acmicpc.net/problem/17827
    일반적인 선형 단방향 연결리스트의 각 노드 번호를 연결된 순서대로 1, 2, ..., N이라 하자.
    이때 N번 노드는 아무 노드도 가리키지 않는데, 여기서 N번 노드가 1번 노드를 제외한 임의의 노드를 가리켜 사이클을 이루게 되는 리스트를 달팽이 리스트라고 한다.
    달팽이 리스트는 각 노드당 하나의 정수를 저장한다.
    즉, 달팽이 리스트는 다음과 같이 생긴 연결리스트이다. 노드 안의 수는 저장된 값을 뜻한다.
*/
// !!!시간 초과가 발생하는 코드!!! //
var Lnode = /** @class */ (function () {
    function Lnode(data) {
        this.data = data;
        this.next = null;
    }
    Lnode.prototype.setNext = function (newNext) { this.next = newNext; };
    Lnode.prototype.getNext = function () { return this.next; };
    Lnode.prototype.getData = function () { return this.data; };
    return Lnode;
}());
var SnailList = /** @class */ (function () {
    function SnailList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    SnailList.prototype.push = function (newNode) {
        var _a, _b;
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.head === this.tail) {
            this.tail = newNode;
            (_a = this.head) === null || _a === void 0 ? void 0 : _a.setNext(this.tail);
        }
        else {
            (_b = this.tail) === null || _b === void 0 ? void 0 : _b.setNext(newNode);
            this.tail = newNode;
        }
        this.size++;
    };
    SnailList.prototype.setCycle = function (index) {
        var _a;
        var point = this.head;
        if (point !== null) {
            for (var i = 1; i < index; i++)
                point = point === null || point === void 0 ? void 0 : point.getNext();
            (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(point);
        }
    };
    SnailList.prototype.getNodeData = function (index) {
        var point = this.head;
        for (var i = 0; i < index; i++)
            point = point === null || point === void 0 ? void 0 : point.getNext();
        console.log(point.getData());
    };
    return SnailList;
}());
var fs = require("fs");
//const input = fs.readFileSync('/dev/stdin/').toString().split('\n');
var input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
var _a = input.shift().trim().split(" ").map(Number), nodeSize = _a[0], ansSize = _a[1], cycleIdx = _a[2];
var data = input.shift().trim().split(" ").map(Number);
var index = input.map(Number);
var snail = new SnailList();
data.forEach(function (elem) {
    var newNode = new Lnode(elem);
    snail.push(newNode);
});
snail.setCycle(cycleIdx);
for (var i = 0; i < ansSize; i++) {
    snail.getNodeData(index[i]);
}
