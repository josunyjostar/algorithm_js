const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function createLinkedList(node) {
    let newNode = new SinglyLinkedList();
    let oldNode = new SinglyLinkedList();

    let idx = 1;
    while (node != null) {
        if (node.head != null) {
            newNode.insertNode(node.head.data);
            node = node.head.next;
        } else {
            if (idx % 2 === 1) {
                newNode.insertNode(node.data);
            } else {
                oldNode.insertNode(node.data);
            }
            node = node.next;
        }
        ++idx;
    }
    if (oldNode.head.next != null) {
        oldNode = createLinkedList(oldNode);
    }

    newNode.tail.next = oldNode.head;
    newNode.tail = oldNode.head;

    return newNode;
}

const arr = [3, 5, 3, 7, 8];
let head = new SinglyLinkedList();
for (let i = 0; i < arr.length; i++) {
    head.insertNode(arr[i]);
}

const result = createLinkedList(head.head);

// function printSinglyLinkedList(node) {
//     while (node != null) {
//         if (node.head != null) {
//             console.log(node.head.data);
//             node = node.head.next;
//         } else {
//             console.log(node.data);
//             node = node.next;
//         }
//     }
// }

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log('print FN', node.data);
    }
}

printSinglyLinkedList(result);
