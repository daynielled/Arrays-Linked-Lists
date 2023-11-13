/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

/** _get(idx): retrieve node at idx. */
  _get(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      newNode.next = this.head;
      this.head = newNode;
  }
    this.length++;
}

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.removeAt(this.length - 1);
  }
  

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const prevNode = this._get(idx - 1);
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      const prevNode = this._get(idx - 1);
      const removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode.val;
    }
  }
  

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
