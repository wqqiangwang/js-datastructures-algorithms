/*
 * @Author: your name
 * @Date: 2020-09-19 19:34:25
 * @LastEditTime: 2020-09-20 11:52:05
 * @LastEditors: Please set LastEditors
 * @Description: 散列表-解决冲突-线性探查
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
            // 没有冲突
            table[pos] = new ValuePair(key,val)
        }else{
            let index = ++pos;
            // 直到找到一个没有冲突的位置
            while(pos[index]!==undefined){
                index ++
            }
            table[index] = new ValuePair(key,val)
        }
        
    }

    this.remove = (key) => {
        let pos = hashCode(key)
        if(table[pos] !== undefined){
            if(table[pos].key === key){
                table[pos] = undefined
                return true
            }else{
                let index = ++pos
                while(table[index] === undefined || table[index].key !== key){
                    index++
                }
                if(table[index].key === key){
                    table[index] = undefined 
                    return true
                }
            }
        }else{
            return undefined
        }
    }

    this.get = (key) => {
        let pos = hashCode(key)
        if(table[pos] !== undefined){
            if(table[pos].key === key){
                return table[pos].value
            }else{
                let index = ++pos
                while(table[index] === undefined || table[index].key !== key){
                    index++
                }
                if(table[index].key === key){
                    return table[index].value 
                }
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