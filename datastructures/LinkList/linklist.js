/*
 * @Author: your name
 * @Date: 2020-09-14 21:40:31
 * @LastEditTime: 2020-09-20 11:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/datastructures/LinkList/linklist.js
 */
function LinkList(){

    function Node(ele){
        this.element = ele
        this.next = null
    }

    let length = 0
    let head = null

    this.append = (ele) => {
        let node = new Node(ele)
        let current

        if(head === null){
            head = node
        }else{
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.removeAt = (pos) => {
        let current = head,
            index = 0,
            previous;
        
        if(pos > -1 && pos < length){
            if(pos === 0){
                head = current.next
            }else{
                while(index++ < pos){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        }else{
            return null
        }
    }

    this.insert = (ele,pos) => {
        
        if(pos >=0 && pos <= length){
            
            let node = new Node(ele)
            let current = head
            let previous, index = 0

            if(pos === 0){
                node.next = current
                head = node
            }else{
                while(index ++ < pos){
                    // 重点 注意引用元素的先后位置
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        }else{
            return false
        }
    }

  
    this.print = () => {
     console.log(JSON.stringify(head))
    }

    this.toString = () => {
        let current = head
        let str = ''
        while(current){
            str += `${current.element}`
            current = current.next
        }
        console.log(str)
    }

    this.indexOf = (ele) => {
        let current = head, index = 0
        while(current){
            if(ele === current.element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.remove = (ele) => {
        let index = this.indexOf(ele)
        return this.removeAt(index)
    }

    this.isEmpty = () => {
        return length === 0
    }

    this.size = () => {
        return length
    }

    this.getHead = () => {
        return head
    }

}

exports.LinkList = LinkList;

// let nodelist = new LinkList()
// nodelist.append(0)
// nodelist.append(1)
// nodelist.append(2)
// nodelist.append(3)

// nodelist.insert('xxx',2)
    
// nodelist.print()
// nodelist.toString()

// console.log(nodelist.indexOf(0))
// console.log(nodelist.indexOf(1))
// console.log(nodelist.indexOf(2))
// console.log(nodelist.indexOf(3))
// console.log(nodelist.indexOf('xxx'))
// console.log(nodelist.indexOf('7654'))


