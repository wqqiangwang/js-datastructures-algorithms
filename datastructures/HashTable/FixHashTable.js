/*
 * @Author: your name
 * @Date: 2020-09-19 19:34:25
 * @LastEditTime: 2020-09-20 11:28:03
 * @LastEditors: Please set LastEditors
 * @Description: 散列表-解决冲突-分离链接
 * @FilePath: /datastructures/HashTable/HashTable.js
 */

const {LinkList} = require('../LinkList/linklist')

function HashTable(){
    let table = []

    let ValuePair = function(key,val){
        this.key = key
        this.value = val
        this.toString = () => (`[${this.key}-${this.value}]`)
    }

    let hashCode = function(key){
        let hashSum = 0
        key.split('').forEach( item => {
            hashSum += item.charCodeAt()
        })
        return hashSum % 50
    }

    this.put = (key,val) => {
        let pos = hashCode(key)
        if(table[pos] === undefined){
            table[pos] = new LinkList()
        }
        table[pos].append(new ValuePair(key, val))
    }

    this.remove = (key) => {
        let pos = hashCode(key)
        if(table[pos] !== undefined){
            let current = table[pos].getHead()
            while(current.next){
                if(current.element.key === key){
                   table[pos].remove(current.element)
                   if(table[pos].isEmpty()){
                       table[pos] = undefined
                   }
                   return true
                }
                current = current.next
            }
            if(current.element.key === key){
                table[pos].remove(current.element)
                if(table[pos].isEmpty()){
                    table[pos] = undefined
                }
                return true
             }
        }else{
            return false
        }
    }

    this.get = (key) => {
        let pos = hashCode(key)
        if(table[pos] !== undefined){
            let current = table[pos].getHead()
            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next
            }

            if(current.element.key = key){
                return current.element.value
            }

        }else{
            return undefined
        }
    }

}
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com'); 

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane')); 

hash.remove('Gandalf');
console.log(hash.get('Gandalf')); 