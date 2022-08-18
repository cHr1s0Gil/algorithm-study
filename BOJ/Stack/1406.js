/*
    https://www.acmicpc.net/problem/1406
*/

class Editor {
    constructor() {
        this.head = new Dnode(null);
        this.cursor = new Dnode(null);
    }

    init(initStr) {
        let temp = new Dnode(initStr[0]);
        this.head = temp;

        for(let i = 1; i < initStr.length; i++) {
            const newNode = new Dnode(initStr[i]);
            temp.next = newNode;
            newNode.previous = temp;
            temp = temp.next;
        }
        this.cursor = temp;
    }

    moveLeft() {
        if(this.cursor.previous)
            this.cursor = this.cursor.previous;
        else {
            const temp = new Dnode(null);
            temp.next = this.cursor;
            this.cursor = temp;
        }
    }

    moveRight() {
        if(this.cursor.next)
            this.cursor = this.cursor.next;
    }

    push(c) {
        const newNode = new Dnode(c);
        
        if(!this.cursor.previous) {
            this.cursor.previous = newNode;
            newNode.next = this.cursor;
            this.head = newNode;
        }

        else if(!this.cursor.next) {
            newNode.previous = this.cursor;
            this.cursor.next = newNode;
            this.cursor = newNode;
        }

        else {
            newNode.previous = this.cursor;
            newNode.next = this.cursor.next;
            this.cursor.next = newNode;
            this.cursor = newNode;
        }
    }

    print() {
        const result = [];
        let temp = this.head;

        while(temp) {
            console.log(temp);
            result.push(temp.item);
            temp = temp.next;
        }
        console.log(result.join(""));
    }
}

const Dnode = require("./util");

const t = new Editor();
t.init("abcd");
t.print();