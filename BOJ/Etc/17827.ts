/* 
    https://www.acmicpc.net/problem/17827
    일반적인 선형 단방향 연결리스트의 각 노드 번호를 연결된 순서대로 1, 2, ..., N이라 하자. 
    이때 N번 노드는 아무 노드도 가리키지 않는데, 여기서 N번 노드가 1번 노드를 제외한 임의의 노드를 가리켜 사이클을 이루게 되는 리스트를 달팽이 리스트라고 한다. 
    달팽이 리스트는 각 노드당 하나의 정수를 저장한다.
    즉, 달팽이 리스트는 다음과 같이 생긴 연결리스트이다. 노드 안의 수는 저장된 값을 뜻한다.
*/

class Lnode {
    private data: number;
    private next: Lnode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }

    setNext(newNext: Lnode | null): void { this.next = newNext; }
    getNext(): Lnode | null { return this.next; }

    getData(): number { return this.data; }
}

class SnailList {
    private head: Lnode | null;
    private tail: Lnode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(newNode: Lnode): void {
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        else if (this.head === this.tail) {
            this.tail = newNode;
            this.head?.setNext(this.tail);
        }

        else {
            this.tail?.setNext(newNode);
            this.tail = newNode;
        }

        this.size++;
    }

    setCycle(index: number): void {
        let point: any = this.head;

        if (point !== null) {

            for (let i = 1; i < index; i++)
                point = point?.getNext();

            this.tail?.setNext(point);
        }
    }

    getNodeData(index: number): void {
        let point: any = this.head;

        for (let i = 0; i < index; i++)
            point = point?.getNext();

        console.log(point.getData())
    }
}

const fs = require("fs");
//const input = fs.readFileSync('/dev/stdin/').toString().split('\n');
const input = fs.readFileSync('input.txt').toString().split('\n'); // 테스트용 파일
const [nodeSize, ansSize, cycleIdx]: [number, number, number] = input.shift().trim().split(" ").map(Number);
const data: Array<number> = input.shift().trim().split(" ").map(Number);
const index: Array<number> = input.map(Number);

const snail = new SnailList();

data.forEach(elem => {
    const newNode = new Lnode(elem);
    snail.push(newNode);
});
snail.setCycle(cycleIdx);
for (let i = 0; i < ansSize; i++) {
    snail.getNodeData(index[i]);
}