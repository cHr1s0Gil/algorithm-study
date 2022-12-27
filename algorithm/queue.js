"use strict";
/*
    정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __importDefault(require("./node"));
var queue = /** @class */ (function () {
    function queue() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    queue.prototype.push = function (X) {
        if (this.size === 0) {
            this.front = X;
            this.back = X;
            this.front.next(this.back);
        }
        else {
            this.back.next(X);
            this.back = X;
        }
        this.size++;
    };
    queue.prototype.pop = function () {
        if (this.size === 0)
            return -1;
        var temp = this.front.item;
        this.front.next(this.front.next);
        this.size--;
        return temp;
    };
    queue.prototype.size = function () { return this.size; };
    queue.prototype.empty = function () { return this.size === 0 ? 1 : 0; };
    queue.prototype.front = function () { return this.front === null ? -1 : this.front.item; };
    queue.prototype.back = function () { return this.back === null ? -1 : this.back.item; };
    return queue;
}());
var q = new queue();
q.push(new node_1.default(1));
q.push(new node_1.default(2));
console.log(q);
