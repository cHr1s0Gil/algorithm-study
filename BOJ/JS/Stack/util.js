"use strict";
var Dnode = /** @class */ (function () {
    function Dnode(newItem) {
        this.item = newItem;
        this.previous = null;
        this.next = null;
    }
    Object.defineProperty(Dnode.prototype, "setItem", {
        set: function (newItem) {
            this.item = newItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dnode.prototype, "getItem", {
        get: function () {
            return this.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dnode.prototype, "setPrevious", {
        set: function (newPrevious) {
            this.previous = newPrevious;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dnode.prototype, "getPrevious", {
        get: function () {
            return this.previous;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dnode.prototype, "setNext", {
        set: function (newNext) {
            this.next = newNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dnode.prototype, "getNext", {
        get: function () {
            return this.next;
        },
        enumerable: false,
        configurable: true
    });
    return Dnode;
}());
module.exports = Dnode;
