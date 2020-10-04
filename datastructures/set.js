/*
 * @Author: your name
 * @Date: 2020-09-19 16:49:17
 * @LastEditTime: 2020-09-19 18:27:40
 * @LastEditors: Please set LastEditors
 * @Description: 集合
 * @FilePath: /datastructures/Set/set.js
 */
function NewSet(){
    let items = {}

    this.add = (val) => {
        if(!this.has(val)){
            items[val] = val 
            return true
        }
        return false
    }

    this.delete = (val) => {
        if(this.has(val)){
            delete items[val]
            return true
        }
        return false
    }

    this.has = (val) => {
        // return val in item
        return items.hasOwnProperty(val)
    }

    this.clear = () => {
        items = {}
    }

    this.size = () => {
        return Object.keys(items).length
    }

    this.values = () => {
        let arr = []
        Object.keys(items).forEach(item => arr.push(items[item]))
        return arr
    }
    this.print = () => {
        console.log(items)
    }

    // 集合操作
    // 并集
    this.union = (otherSet) => {
        let unionSet = new NewSet()
      
        this.values().forEach(item => unionSet.add(item))
        otherSet.values().forEach(item => unionSet.add(item))
        
        return unionSet
    }

    // 交集
    this.interSection = (otherSet) => {
        let interSectionSet = new NewSet()

        this.values().forEach( item => {
            if(otherSet.has(item)){
                interSectionSet.add(item)
            }
        })

        return interSectionSet;
    }

    // 差集
    this.diff = (otherSet) => {
        let diffSet = new NewSet()

        this.values().forEach( item => {
            if(!otherSet.has(item)){
                diffSet.add(item)
            }
        })
        return diffSet
    }

    // 子集
    this.subSet = (otherSet) => {

        if(this.size() > otherSet.size()){
            return false
        }else{
            let value = this.values()
            for(let i = 0; i< value.length; i++){
                if(!otherSet.has(value[i])){
                    return false
                }
            }
            return true
        }
    }
}

let set1 = new NewSet()
set1.add('111')
set1.add('222')
set1.add('333')
set1.print()

let set2 = new NewSet()
set2.add('444')
set2.add('333')
set2.add('666')
set2.print()

let set3 = new NewSet()
set3.add('111')
set3.add('222')
set3.add('333')
set3.print()

console.log('并集:',(set1.union(set2)).values())
console.log('交集:',(set1.interSection(set2)).values())
console.log('差集:',(set1.diff(set2)).values())
console.log('子集:',set1.subSet(set3))


