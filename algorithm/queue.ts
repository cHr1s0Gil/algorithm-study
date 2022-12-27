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

import node from "./node";

interface Queue {
    public push(X: node): void;
    public pop(): number;
    public size(): number;
    public empty(): number;
    public front(): number;
    public back(): number;
}

class queue implements Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }    

    public push(X: node): void {
        if(this.size === 0) {
            this.front = X;
            this.back = X;
            this.front.next(this.back);
        }
        else {
            this.back.next(X);
            this.back = X;
        }
        this.size++;
    }

    public pop(): number {
        if(this.size === 0) return -1;
        
        const temp = this.front.item;
        this.front.next(this.front.next);
        this.size--;

        return temp;
    }
    
    public size() { return this.size; }

    public empty() { return this.size === 0 ? 1 : 0; }

    public front() { return this.front === null ? -1 : this.front.item; }

    public back() { return this.back === null ? -1 : this.back.item; }
}

const q = new queue();
q.push(new node(1));
q.push(new node(2));

console.log(q);