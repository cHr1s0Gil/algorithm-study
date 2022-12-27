class Dnode<T> {
    private item: T;
    private next: Dnode<T> | null;
    private previous: Dnode<T> | null;

    constructor(newItem: T) {
        this.item = newItem;
        this.previous = null;
        this.next = null;
    }

    set setItem(newItem: T) {
        this.item = newItem;
    }

    get getItem(): T {
        return this.item;
    }

    set setPrevious(newPrevious: Dnode<T>) {
        this.previous = newPrevious;
    }

    get getPrevious(): Dnode<T> {
        return this.previous;
    }

    set setNext(newNext: Dnode<T>) {
        this.next = newNext;
    }

    get getNext(): Dnode<T> {
        return this.next;
    }
}

module.exports = Dnode;