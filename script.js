class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  get size() {
    let size = 0;
    if (!this.head) return size;
    if (this.head) {
      size++;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
      size++;
    }
    return size;
  }
  get getHead() {
    return this.head;
  }
  get tail() {
    let current = this.head;
    if (!current) return null;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    let i = 0;
    if (current) {
      while (current.next) {
        if (i == index) return current;
        current = current.next;
        i++;
      }
      if (i == index) return current;
    }
    return -1;
  }
  pop = () => {
    let current = this.head;
    if (!current) {
      return;
    }
    if (current.next) {
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    } else this.head = null;
  };

  contains(value) {
    let current = this.head;
    if (current) {
      while (current.next) {
        if (value == current.data) return true;
        current = current.next;
      }
      if (value == current.data) return true;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    if (current) {
      while (current.next) {
        if (value == current.data) return i;
        current = current.next;
        i++;
      }
      if (value == current.data) return i;
    }
    return null;
  }
  get toString() {
    let current = this.head;
    let stringOutput = "";
    if (current) {
      while (current.next) {
        stringOutput += `( ${current.data} ) -> `;
        current = current.next;
      }
      stringOutput += `( ${current.data} ) -> `;
      stringOutput += `null`;
    }
    return stringOutput;
  }
  insertAt(value, index) {
    let node = new Node(value);
    let current = this.head;
    let i = 0;
    let prevNode;
    let nextNode;
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index > this.size) {
      console.error("Index outside the range of the list");
      return;
    }
    if (index < 0) {
      console.error("Index can't be negative!");
    }
    if (current) {
      while (current.next) {
        if (i == index - 1) {
          prevNode = current;
          if (current.next) {
            nextNode = current.next;
          }
          prevNode.next = node;
          if (nextNode) {
            node.next = nextNode;
          }
        }
        current = current.next;
        i++;
      }
      if (index - 1 == i) {
        this.append(value);
      }
    } else {
      this.prepend(value);
    }
  }
  removeAt(index) {
    let current = this.head;
    let i = 0;
    let prevNode;
    let nextNode;

    if (current) {
      if (index == 0) {
        this.head = current.next;
      }
      while (current.next) {
        if (i == index - 1) {
          prevNode = current;
          if (current.next.next) {
            nextNode = current.next.next;
          }
          if (prevNode && nextNode) {
            prevNode.next = nextNode;
          }
          if (prevNode && !nextNode) {
            this.pop();
            return;
          }
        }
        current = current.next;
        i++;
      }
    }
  }
}

let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.insertAt(0, 0);
list.insertAt(9, 4);
list.removeAt(0);
console.log(JSON.stringify(list));
