/*
 * @Author: your name
 * @Date: 2020-10-02 16:24:06
 * @LastEditTime: 2020-10-03 17:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/quickSort.js
 */

let partition = (arr, left, right) => {
    let mid = arr[Math.floor((left+right)/2)]
    let i = left, j = right
    while(i <= j){
        while(arr[i] < mid){
            i++
        }
        while(mid < arr[j]){
            j--
        }
        if(i <= j){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return i
}

let quick = (arr, left, right) => {
    let index
    if(arr.length > 1){
        index = partition(arr, left, right) 
        if(left < index-1){
            quick(arr, 0, index - 1)
        }
        if(index < right){
            quick(arr, index, right)
        }
    }
    return arr
}
function quickSort(arr){
    return quick(arr, 0, arr.length - 1)
}

function create(size){
    let arr = []
    for(let i = size; i > 0; i--){
        arr.push(Math.floor((Math.random() * 100)+1))
    }
    return arr
}

console.log(quickSort(create(10)))