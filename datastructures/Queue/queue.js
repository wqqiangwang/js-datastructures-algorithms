/*
 * @Author: your name
 * @Date: 2020-09-13 19:41:38
 * @LastEditTime: 2020-09-14 21:15:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/datastructures/Queue/queue.js
 */
function Queue(){
    
    this.items = []

    this.enqueue = (ele) => {
        this.items.push(ele)
    }

    this.dequeue = () => {
        return this.items.shift()
    }

    this.front = () => {
        return this.items[0]
    }

    this.isEmpty = () => {
        return this.items.length === 0
    }

    this.size = () => {
        return this.items.length
    }

    this.print = () => {
        return this.items.join('-')
    }

}

module.exports = Queue

// let queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// console.log(queue.front())
// console.log(queue.size())
// console.log(queue.print())
// console.log(queue.isEmpty())
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.front())
// console.log(queue.size())
// console.log(queue.print())
// console.log(queue.isEmpty())


