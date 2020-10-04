/*
 * @Author: your name
 * @Date: 2020-09-18 20:45:14
 * @LastEditTime: 2020-09-19 12:25:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/datastructures/LinkList/doubleLinkList.js
 */
function DoubleLinkList(){
    let Node = function(ele){
        this.element = ele
        this.next = null
        this.prev = null
    }
    
    let length = 0
    let head = null
    let tail = null

    this.insert = (pos, ele) => {
        if(pos >= 0 && pos <= length){
            let node = new Node(ele)
            let current = head,
                previous,
                index = 0;
            if(pos === 0){
               if(!head){
                tail = node
                head = node
               }else{
                   node.next = current
                   current.prev = node
                   head = node
               }
            }else if(pos === length){
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }else{
                while(index++ <= pos){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }
            length++
            return true
            
        }else{
            return false
        }
    }

    this.removeAt = (pos) => {
       if(pos > -1 && pos <=length){
            let current = head,
                previous,
                index = 0
            if(pos === 0){
                head = current.next
                if(length === 1){
                    tail = null
                }else{
                    head.prev = null
                }
            }else if(pos === length -1){
                current = tail
                tail = current.prev
                tail.next = null
            }else{
                while(index++ < pos){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
       }else{
           return false
       }
    }

}