"use strict";
var node = /** @class */ (function () {
    function node(newItem) {
        this.item = newItem;
        this.next = null;
    }
    node.prototype.getItem = function () {
        return this.item;
    };
    node.prototype.setItem = function (newItem) {
        this.item = newItem;
    };
    node.prototype.getNext = function () {
        return this.next;
    };
    node.prototype.setNext = function (newNext) {
        this.next = newNext;
    };
    return node;
}()); // node class
var stack = /** @class */ (function () {
    // stack 생성자
    function stack() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // 스택에 원소 추가
    stack.prototype.push = function (newNode) {
        // 스택이 비어있을 경우
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        // 비어있지 않을경우 head에 새로운 원소 추가
        else {
            var temp = this.head;
            this.head = newNode;
            this.head.setNext(temp);
            this.length++;
        }
    };
    // 원소 삭제
    stack.prototype.pop = function () {
        var _a, _b;
        // 스택이 비어있을 경우
        if (this.length === 0)
            console.log("Empty Stack!");
        // 스택이 존재할 경우
        else {
            // head에 새로운 노드 삽입, head의 다음 노드를 기존 노드로 연결
            var temp = (_a = this.head) === null || _a === void 0 ? void 0 : _a.getNext();
            var item = (_b = this.head) === null || _b === void 0 ? void 0 : _b.getItem();
            this.head = temp;
            console.log("pop ".concat(item, " from stack"));
            this.length--;
            return item;
        }
    };
    // 스택의 사이즈를 반환
    stack.prototype.size = function () {
        return this.length;
    };
    // 스택 출력
    stack.prototype.print = function () {
        var currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.getItem());
            currentNode = currentNode.getNext();
        }
    };
    return stack;
}());
var s = new stack();
var elements = Array.from({ length: 5 }, function (value, idx) { return idx; });
elements.forEach(function (elem) {
    var newNode = new node(elem);
    console.log("push ".concat(elem, " to stack"));
    s.push(newNode);
});
s.print();
console.log("stack size: ".concat(s.size()));
s.pop();
s.pop();
s.print();
console.log("stack size: ".concat(s.size()));
