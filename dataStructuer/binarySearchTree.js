class Node {
    constructor() {
        this.parent = null;
        this.left = null;
        this.right = null;
        this.key = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node();
        newNode.key = key;

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let node = this.root;
        let parent = null;

        while (node != null) {
            parent = node;
            if (key < node.key) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        newNode.parent = parent;
        if (key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }

    print(node, x, y) {
        if (node === null) {
            return;
        }

        const space = ' ';
        process.stdout.write(space.repeat(x) + node.key);
        console.log();
        this.print(node.left, x - 5 / (y + 1), y + 1);
        this.print(node.right, x + 5 / (y + 1), y + 1);
    }

    printNode() {
        this.print(this.root, 10, 0);
    }

    minNode(node) {
        while (node.left != null) {
            node = node.left;
        }

        return node;
    }
    min() {
        return this.minNode(this.root);
    }

    maxNode(node) {
        while (node.right != null) {
            node = node.right;
        }

        return node;
    }
    max() {
        return this.maxNode(this.root);
    }

    searchNode(node, key) {
        while (node != null && node.key != key) {
            if (key < node.key) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return node;
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    //* 3가지 경우
    nextNode(node) {
        if (node.right) {
            return this.minNode(node.right);
        }

        let parent = node.parent;
        while (parent && node === parent.right) {
            node = parent;
            parent = parent.parent;
        }

        return parent;
    }

    next(key) {
        const node = this.search(key);
        return this.nextNode(node);
    }

    deleteNode(node) {
        if (node === null) {
            console.log('없는 node');
            return;
        }

        if (node.left === null) {
            this.replace(node, node.right);
        } else if (node.right === null) {
            this.replace(node, node.left);
        } else {
            const nextNode = this.next(node.key);
            node.key = nextNode.key;
            this.deleteNode(nextNode);
        }
    }
    delete(key) {
        const node = this.search(key);
        this.deleteNode(node, key);
    }
    replace(u, v) {
        if (u.parent === null) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }

        if (v) {
            v.parent = u.parent;
        }
    }
}

const test = new BinarySearchTree();

test.insert(20);
test.insert(10);
test.insert(30);
test.insert(40);

test.insert(48);

test.insert(25);
test.insert(21);
test.insert(5);
test.insert(4);
test.printNode();
let node = test.min();

let temp1 = test.search(10);
let temp2 = test.next(21);

delete test;
console.log(node);
// var treeify = require("treeify");
// console.log(treeify.asTree(test, true));
