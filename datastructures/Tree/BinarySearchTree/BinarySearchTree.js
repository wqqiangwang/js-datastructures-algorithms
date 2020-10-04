/*
 * @Author: your name
 * @Date: 2020-09-20 17:45:15
 * @LastEditTime: 2020-09-21 21:10:55
 * @LastEditors: Please set LastEditors
 * @Description: 二叉搜索树
 * @FilePath: /datastructures/Tree/BinarySearchTree/BinarySearchTree.js
 */
function BinarySearchTree(){

    let Node = function(key){
        this.key = key // 键(节点)
        this.left = null // 左侧子节点
        this.right = null // 右侧子节点
    }

    let insertNode = (node, newnode) => {
        if(newnode.key < node.key){
            if(node.left === null){
                node.left = newnode
            }else{
                insertNode(node.left, newnode)
            }
        }else{
            if(node.right === null){
                node.right = newnode
            }else{
                insertNode(node.right, newnode)
            }
        }
    }

    // 中序遍历辅助函数
    let inOrderTraverseNode = (node,cb) => {
        if(node !== null){
            inOrderTraverseNode(node.left, cb)
            cb(node.key)
            inOrderTraverseNode(node.right, cb)
        }
    }

    // 先序遍历辅助函数
    let preOrderTraverseNode = (node, cb) => {
        if(node !== null){
            cb(node.key)
            preOrderTraverseNode(node.left, cb)
            preOrderTraverseNode(node.right, cb)
        }
    }

    // 后序遍历辅助函数
    let  postOrderTraverseNode = (node, cb) => {
        if(node !== null){
            postOrderTraverseNode(node.left, cb)
            postOrderTraverseNode(node.right, cb)
            cb(node.key)
        }
    }

    let searchMinMaxNode = (flag) => {
        let node = root
        if(node !== null){
            while(node && node[flag]!==null){
                node = node[flag]
            }
            return node.key
        }
        return null
    }

    let searchNode = (node,key) => {
        if(node === null){
            return false
        }
        if(key < node.key){
            return searchNode(node.left, key)
        }else if (key > node.key){
            return searchNode(node.right, key)
        }else{
            return true
        }
    }

    let findMinNode = (node) => {
        if(node !== null){
            while(node && node.left !== null){
                node = node.left
            }
            return node
        }
    }

    let removeNode = (node, key) => {
        if( node === null){
            return null
        }
        if(key < node.key){
            node = removeNode(node.left,key)
            return node
        }else if(key > node.key){
            node = removeNode(node.right,key)
            return node
        }else{
            // 只有一个叶节点
            if(node.left === null && node.right === null){
                node = null
                return node
            }
            // 一个只有一个子节点的节点
            if(node.left === null){
                node = node.right
                return node
            }else if(node.right = null){
                node = node.left
                return node
            }
            //一个有两个子节点的节点
            let aux = findMinNode(node.right) // 找到右树中最小节点
            node.key = aux.key // 右侧子树中最小节点的键去更新这个节点的值
            node.right = removeNode(node.right, aux.key) // 删除右树中最小节点
            return node // 返回节点
        }
    }

    //根元素
    let root = null

    this.insert = (key) => {
        let node = new Node(key)
        if(root === null){
            root = node
        }else{
            insertNode(root, node)
        }
    }

    this.search = (key) => {
        return searchNode(root,key)
    }

    this.remove = (key) => {
        root = removeNode(root, key)
    }

    this.min = () => {
        return searchMinMaxNode('left')
    }

    this.max = () => {
       return searchMinMaxNode('right')
    }

    // 中序遍历方式遍历所有节点
    this.inOrderTraverse = (cb) => {
        inOrderTraverseNode(root, cb)
    }

    //先序遍历方式遍历所有节点
    this.preOrderTraverse = (cb) => {
        preOrderTraverseNode(root, cb)
    }

    // 后序遍历方式遍历所有节点
    this.postOrderTraverse = (cb) => {
        postOrderTraverseNode(root, cb)
    }

    this.print = () => {
        console.log(JSON.stringify(root,null,2))
    }
}

var tree = new BinarySearchTree();
tree.insert(11); 
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25); 
tree.print()
// tree.inOrderTraverse((val) => {
//     console.log(val)
// })
// tree.preOrderTraverse((val) => {
//     console.log(val)
// })
tree.postOrderTraverse((val)=>{
    console.log(val)
})

console.log('min:',tree.min())
console.log('max:',tree.max())

console.log(tree.search(233))
console.log(tree.search(20))

