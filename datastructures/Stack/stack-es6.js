// class Stack{

//     constructor(){
//         this.items = [];
//     }

//     push(ele){
//         this.items.push(ele)
//     }

//     pop(){
//        return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length - 1]
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     clear(){
//         this.items = []
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         return this.items.join('-')
//     }
// }

// 使用WeakMap确保属性是私有的

let Stack = (function(){
    let items = new WeakMap()
    class Stack{

        constructor(){
            items.set(this,[])
        }
    
        push(ele){
            let list = items.get(this)
            list.push(ele)
        }
    
        pop(ele){
            let list = items.get(this)
            return list.pop(ele)
        }
    
        peek(){
            let list = items.get(this)
            return list[list.length - 1]
        }
    
        isEmpty(){
            let list = items.get(this)
            return list.length === 0
        }
    
        clear(){
            items.set(this,[])
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

    return Stack

})()

let instance = new Stack()

instance.push(1)
instance.push(2)
instance.push(3)
console.log('pring:',instance.print())
instance.pop()
console.log('pring:',instance.print())
console.log(instance.peek())
console.log(instance.isEmpty())
console.log(instance.size())
instance.clear()
console.log(instance.size())





