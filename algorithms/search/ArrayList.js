/*
 * @Author: your name
 * @Date: 2020-10-05 12:43:24
 * @LastEditTime: 2020-10-05 13:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-datastructures-algorithms/algorithms/search/ArrayList.js
 */
function ArrayList(){
    let array = []

    this.insert = (el) => {
        array.push(el)
    }

    // 插入排序
    this.insertSort = () => {
        let length = array.length,
            j,
            temp;
        for(let i = 1; i < length; i++){
            j = i;
            temp = array[i] 
            while( j > 0 && array[j-1] > temp){
                array[j] = array[j-1]
                j--
            }
            array[j] = temp
        }
    }

    this.sequentialSearch = (ele) => {
        for(let i = 0; i < array.length; i++){
            if(array[i] === ele){
                return i
            }
            return -1
        }
    }

    this.binarySearch = (key) => {
        this.insertSort()
        let low = 0,
            high = array.length - 1,
            mid;
        console.log(array)
        while (low <= high) {
           mid = Math.floor((low+high)/2)
           if(key < array[mid]){
               high = mid - 1
           }else if(key > array[mid]){
               low = mid + 1
           }else{
               return mid
           }
        }
        return -1
    }
    
}

function createArr(size){
    let arr = new ArrayList()
    for(let i = size; i > 0; i--){
        arr.insert(Math.floor((Math.random() * 10)+1))
    }
    return arr
}

let array = createArr(10)
console.log(array.binarySearch(8))




