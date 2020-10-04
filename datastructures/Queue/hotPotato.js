/*
 * @Author: your name
 * @Date: 2020-09-14 20:59:11
 * @LastEditTime: 2020-09-14 21:15:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/datastructures/Queue/hotPotato.js
 */
let Queue = require('./queue')

function hotPotato(namelist,num){
    let queue = new Queue()
    let eliminated // 每轮淘汰的人
    namelist.forEach(element => {
        queue.enqueue(element)
    });
    
    while(queue.size()>1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
    }
    return queue.dequeue()
}

let winner = hotPotato( ['John','Jack','Camila','Ingrid','Carl'],7)
console.log(winner)