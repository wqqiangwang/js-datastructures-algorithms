/*
 * @Author: your name
 * @Date: 2020-09-19 19:05:02
 * @LastEditTime: 2020-09-23 23:39:48
 * @LastEditors: Please set LastEditors
 * @Description: 字典
 * @FilePath: /datastructures/Dictionary/dictionary.js
 */
function Dictionary(){
    let items = {}
    
    this.set = (key,val) => {
        items[key] = val
    }

    this.delete = (key) => {
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.has = (key) => {
        return key in items
    }

    this.get = (key) => {
        return this.has(key) ? items[key] : undefined
    }

    this.clear = () => {
        items = {}
    }

    this.size = () => {
        return Object.keys(items).length
    }

    this.values = () => {
        let value = []
        Object.keys(items).forEach( key => (this.has(key) && value.push(items[key])))
        return value
    }

    this.keys = () => {
        return Object.keys(items)
    }

}

module.exports = {Dictionary}

// var dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com'); 

// console.log('keys:',dictionary.keys())
// console.log('values:',dictionary.values())
// console.log('size:',dictionary.size())
// console.log("get John's email:",dictionary.get("John"))
// console.log("has John:",dictionary.has("John"))
// dictionary.delete('John')
// console.log("has John:",dictionary.has("John"))


