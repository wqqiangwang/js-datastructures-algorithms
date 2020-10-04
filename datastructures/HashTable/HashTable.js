/*
 * @Author: your name
 * @Date: 2020-09-19 19:34:25
 * @LastEditTime: 2020-09-19 19:50:22
 * @LastEditors: Please set LastEditors
 * @Description: 散列表
 * @FilePath: /datastructures/HashTable/HashTable.js
 */
function HashTable(){
    let item = []

    let hashCode = function(key){
        let hashSum = 0
        key.split('').forEach( item => {
            hashSum += item.charCodeAt()
        })
        return hashSum % 50
    }

    this.put = (key,val) => {
        let pos = hashCode(key)
        item[pos] = val
    }
    this.remove = (key) => {
        let pos = hashCode(key)
        item[pos] = undefined
    }
    this.get = (key) => {
        return item[hashCode(key)]
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