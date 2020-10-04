/*
 * @Author: your name
 * @Date: 2020-09-13 19:41:38
 * @LastEditTime: 2020-09-14 21:16:26
 * @LastEditors: Please set LastEditors
 * @Description: 最小优先队列
 * @FilePath: /JS/datastructures/Queue/queue.js
 */
let Queue = (function(){
    let items = new WeakMap()

    function QueueElement(ele,pri){
        this.element = ele;
        this.priority = pri;
    }

    class QueueEs6{
        constructor(){
            items.set(this,[])
        }

        // enqueue(ele){
        //     let list = items.get(this)
        //     list.push(ele)
        // }
        enqueue(ele,pri){
            let element = new QueueElement(ele,pri)
            let list = items.get(this)
            let add = false

            for(let i = 0; i < list.length; i++)
                if(element.priority < list[i].priority){
                    list.splice(i,0,element)
                    add = true
                    break
                }
                if(!false){
                    list.push(element)
                }
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
    
        // print(){
        //     let list = items.get(this)
        //     return list.join('-')
        // }
        print(){
            let item = items.get(this)
            for (let i=0; i<item.length; i++){
                console.log(`${item[i].element}-${item[i].priority}`);
            } 
        }
    
    }
    return QueueEs6;
})()


let queue = new Queue()

queue.enqueue('tom',1)
queue.enqueue('jact',2)
queue.enqueue('jarry',3)
queue.enqueue('susan',4)
queue.enqueue('hery',5)
console.log(queue.front())
console.log(queue.size())
queue.print()
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.front())
console.log(queue.size())
queue.print()
console.log(queue.isEmpty())



