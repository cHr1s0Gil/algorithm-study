/*
    https://www.acmicpc.net/problem/1406
*/
class Editor {
    constructor() {
        this.head = new Dnode(null);
        this.cursor = new Dnode(null);
    }

    init(initStr) {
        let temp = this.head;

        for (let i = 0; i < initStr.length; i++) {
            const newNode = new Dnode(initStr[i]);
            this.head.next = newNode;
            newNode.previous = this.head;
            this.head = this.head.next;
        }
        this.cursor = this.head;
        this.head = temp;
    }

    moveLeft() {
        if (this.cursor.previous)
            this.cursor = this.cursor.previous;
    }

    moveRight() {
        if (this.cursor.next)
            this.cursor = this.cursor.next;
    }

    push(c) {
        const newNode = new Dnode(c);

        // 커서가 맨 왼쪽
        if (!this.cursor.previous) {
            newNode.next = this.cursor.next;
            this.cursor.next.previous = newNode;
            newNode.previous = this.cursor;
            this.cursor.next = newNode;
            this.cursor = newNode;
        }

        else if (!this.cursor.next) {
            newNode.previous = this.cursor;
            this.cursor.next = newNode;
            this.cursor = newNode;
        }

        else {
            //acd
            newNode.next = this.cursor.next;
            this.cursor.next.previous = newNode;
            newNode.previous = this.cursor;
            this.cursor.next = newNode;
            this.cursor = newNode;
        }
    }

    delete() {
        if (!this.cursor.previous) return;
        else if (!this.cursor.next) {
            this.cursor = this.cursor.previous;
            this.cursor.next.previous = null;
            this.cursor.next = null;
        }
        else {
            const temp = this.cursor.next;
            this.cursor = this.cursor.previous;
            this.cursor.next.next = null;
            this.cursor.next.previous = null;
            this.cursor.next = temp;
            temp.previous = this.cursor;
        }
    }

    print() {
        const result = [];
        let temp = this.head;

        while (temp) {
            result.push(temp.item);
            temp = temp.next;
        }
        console.log(result.join(""));
    }
}

const fs = require("fs");
const Dnode = require("./util");
const input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용 코드
const initStr = input.shift();
const commandSize = Number(input.shift());

const editor = new Editor();
editor.init(initStr);

for (let i = 0; i < commandSize; i++) {
    const [command, param] = input.shift().split(" ");

    if (command === "L") editor.moveLeft();
    else if (command === "D") editor.moveRight();
    else if (command === "B") editor.delete();
    else if (command === "P") editor.push(param);
}

editor.print();