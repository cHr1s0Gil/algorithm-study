"use strict";
class node {
    constructor(newItem) {
        this.item = newItem;
        this.next = null;
    }
    getItem() {
        return this.item;
    }
    setItem(newItem) {
        this.item = newItem;
    }
    getNext() {
        return this.next;
    }
    setNext(newNext) {
        this.next = newNext;
    }
} // node class
class stack {
    // stack 생성자
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // 스택에 원소 추가
    push(newNode) {
        // 스택이 비어있을 경우
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        // 비어있지 않을경우 head에 새로운 원소 추가
        else {
            const temp = this.head;
            this.head = newNode;
            this.head.setNext(temp);
            this.length++;
        }
    }
    // 원소 삭제
    pop() {
        var _a, _b;
        // 스택이 비어있을 경우
        if (this.length === 0)
            console.log("Empty Stack!");
        // 스택이 존재할 경우
        else {
            // head에 새로운 노드 삽입, head의 다음 노드를 기존 노드로 연결
            const temp = (_a = this.head) === null || _a === void 0 ? void 0 : _a.getNext();
            const item = (_b = this.head) === null || _b === void 0 ? void 0 : _b.getItem();
            this.head = temp;
            console.log(`pop ${item} from stack`);
            this.length--;
            return item;
        }
    }
    // 스택의 사이즈를 반환
    size() {
        return this.length;
    }
    // 스택 출력
    print() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.getItem());
            currentNode = currentNode.getNext();
        }
    }
}
const s = new stack();
const elements = Array.from({ length: 5 }, (value, idx) => idx);
elements.forEach(elem => {
    const newNode = new node(elem);
    console.log(`push ${elem} to stack`);
    s.push(newNode);
});
s.print();
console.log(`stack size: ${s.size()}`);
s.pop();
s.pop();
s.print();
console.log(`stack size: ${s.size()}`);
