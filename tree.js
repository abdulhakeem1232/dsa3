class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class binarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root == null
    }
    insert(value) {
        let newnode = new Node(value)
        if (this.root == null) {
            this.root = newnode
        }
        else {
            this.insertNode(this.root, newnode)
        }
    }

    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode
            }
            else {
                this.insertNode(root.left, newnode)
            }
        }
        else {
            if (root.right == null) {
                root.right = newnode
            }
            else {
                this.insertNode(root.right, newnode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value == value) {
                return true
            }
            else if (root.value < value) {
                return this.search(root.right, value)
            }
            else {
                return this.search(root.left, value)
            }
        }
    }
    preorder(root) {
        let value = []
        if (root) {
            console.log(root.value);
            value.push(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
        return value
    }
    inorder(root) {
        let value = []
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            value.push(root.value)
            this.inorder(root.right)
        }
        return value
    }
    postorder(root) {
        let value = []
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
            value.push(root.value)
        }
        return value
    }
    bfs() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let cur = queue.shift()
            console.log(cur.value);
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }

        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
    }

    max(root) {
        if (!root.right) {
            return root.value
        }
        return this.min(root.right)
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root == null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        }
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        }
        else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
            // root.value=this.max(root.left)
            // root.left=this.deleteNode(root.left,root.value)
        }
        return root
    }

    height(root) {
        if (root == null) {
            return 0
        }
        let left = this.height(root.left)
        let right = this.height(root.right)
        return Math.max(left, right) + 1
    }
    closest(root, target) {
        let closest = root.value
        while (root != null) {
            if (Math.abs(root.value - target) < (Math.abs(target - closest))) {
                closest = root.value
            }
            if (target < root.value) {
                root = root.left
            } else {
                root = root.right
            }
        }
        return closest
    }
    validateIsBst(root) {
        let value = this.inorder(root)
        for (let i = 1; i < value.length; i++) {
            if (value[i] < value[i - 1]) {
                return false
            }
        }
        return true
    }
    findpath(root, value) {
        let path = []
        let current = root
        while (current) {
            path.push(current.value)
            if (current.value == value) {
                path.pop()
                return path.slice()
            }
            if (value < current.value) {
                current = current.left
            }
            else {
                current = current.right
            }
        }
        return null
    }
    ancestor(node1, node2) {
        let path1 = this.findpath(this.root, node1)
        let path2 = this.findpath(this.root, node2)
        if (!path1 || !path2) {
            return null
        }
        let common=null
        for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
            if (path1[i] == path2[i]) {
                common = path1[i]
            }
            else {
                break
            }
        }
        return common
    }

}

const bst = new binarySearchTree()
// console.log('empty',bst.isEmpty());

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(9)
bst.insert(8)



// console.log('search 10',bst.search(bst.root,10));
// console.log('search 15',bst.search(bst.root,15));
// console.log('search 5',bst.search(bst.root,5));
// console.log('search 100',bst.search(bst.root,100));
// console.log('empty',bst.isEmpty());
console.log('preorder');
bst.preorder(bst.root)
console.log('inorder');
bst.inorder(bst.root)
console.log('postorder');
bst.postorder(bst.root)
console.log('bfs');
bst.bfs()

console.log('min',bst.min(bst.root));
console.log('max',bst.max(bst.root));

// bst.bfs()
// bst.delete(10)
// bst.bfs()
// console.log('hieght',bst.height(bst.root))
// console.log('closest',bst.closest(bst.root,12));
// console.log(bst.validateIsBst(bst.root));

// console.log('common',bst.ancestor(3, 8));
