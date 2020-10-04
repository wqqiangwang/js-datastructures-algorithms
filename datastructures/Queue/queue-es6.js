/*
 * @Author: your name
 * @Date: 2020-09-13 19:41:38
 * @LastEditTime: 2020-09-14 21:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/datastructures/Queue/queue.js
 */
let Queue = (function(){
    let items = new WeakMap()

    class QueueEs6{
        constructor(){
            items.set(this,[])
        }

        enqueue(ele){
            let list = items.get(this)
            list.push(ele)
        }
    
        dequeue(){
            let list = items.get(this)
            return list.shift()
        }
    
        front(){
            let list = items.get(this)
            return list[0]
        }
    
        isEmpty(){
            let list = items.get(this)
            return list.length === 0
        }
    
        size(){
            let list = items.get(this)
            return list.length
        }
    
        print(){
            let list = items.get(this)
            return list.join('-')
        }
    
    }
    return QueueEs6;
})()


let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.front())
console.log(queue.size())
console.log(queue.print())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.front())
console.log(queue.size())
console.log(queue.print())
console.log(queue.isEmpty())



