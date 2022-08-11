class node {
    private item: number;
    private next: node | null | undefined;

    constructor(newItem: number) {
        this.item = newItem;
        this.next = null;
    }

    public getItem() {
        return this.item;
    }

    protected setItem(newItem: number){
        this.item = newItem;
    }

    public getNext() {
        return this.next;
    }

    public setNext(newNext: node | undefined | null) {
        this.next = newNext;
    }
} // node class

class stack {
    private head: node | null | undefined;
    private tail: node | null | undefined;
    private length: number;

    // stack 생성자
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 스택에 원소 추가
    public push(newNode: node): void {
        // 스택이 비어있을 경우
        if(this.length === 0) {
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
    public pop(): number | void | undefined {
        // 스택이 비어있을 경우
        if(this.length === 0) 
            console.log("Empty Stack!");

        // 스택이 존재할 경우
        else {
            // head에 새로운 노드 삽입, head의 다음 노드를 기존 노드로 연결
            const temp = this.head?.getNext();
            const item = this.head?.getItem();

            this.head = temp;
            console.log(`pop ${item} from stack`);
            this.length--;

            return item;
        }
    }

    // 스택의 사이즈를 반환
    public size(): number {
        return this.length;
    }

    // 스택 출력
    public print(): void {
        let currentNode = this.head;

        while(currentNode != null) {
            console.log(currentNode.getItem());
            currentNode = currentNode.getNext();
        }
    }
}

const s = new stack();
const elements = Array.from({ length: 5 }, (value, idx) => idx);
elements.forEach(elem=> {
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