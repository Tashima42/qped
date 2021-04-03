class Node {
  element
  next
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  _head
  _size

  constructor() {
    this._head = null
    this._size = 0
  }

  add(element) {
    const node = new Node(element)
    let current

    if (this._head == null) {
      this._head = node
    } else {
      current = this._head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this._size++
  }
  insertAt(element, index) {
    if (index > 0 && index > this._size)
      return false;
    else {
      const node = new Node(element);
      let curr = this._head, prev;

      if (index == 0) {
        node.next = this._head;
        this._head = node;
      } else {
        curr = this.head;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this._size++;
    }
  }
  removeFrom(index) {
    if (index > 0 && index > this._size) {
      return -1;
    } else {
      let curr = this._head,
        prev = curr

      if (index === 0) {
        this._head = curr.next
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr
          curr = curr.next
        }
      }

      prev.next = curr.next
    }
    this._size--
    return curr.element
  }
  removeElement(element) {
    var current = this._head;
    var prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this._head = current.next;
        } else {
          prev.next = current.next;
        }
        this._size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(element) {
    var count = 0;
    var current = this._head;

    while (current != null) {
      if (current.element === element)
        return count;
      count++;
      current = current.next;
    }
    return -1;
  }
  isEmpty() {
    return this._size == 0;
  }
  size_of_list() {
    return this._size
  }
  // prints the list items
  printList() {
    var curr = this.head;
    var arr = [];
    while (curr) {
      arr.push(curr.element)
      curr = curr.next;
    }
    return arr
  }
}