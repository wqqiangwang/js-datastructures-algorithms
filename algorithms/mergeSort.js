/*
 * @Author: your name
 * @Date: 2020-10-03 17:50:18
 * @LastEditTime: 2020-10-03 17:52:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/mergeSort.js
 */
let mergeSortRec = (array) => {
    if(array.length === 1){
        return array
    }
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0,mid),
        right = array.slice(mid,array.length)
    return merge(mergeSortRec(left), mergeSortRec(right))
}

let merge = (left, right) => {
    let il = 0,
        ir = 0,
        result = [];
    while(il < left.length && ir < right.length){
        if(left[il] < right[ir]){
            result.push(left[il++])
        }else{
            result.push(right[ir++])
        }
    }

    while(il < left.length){
        result.push(left[il++])
    }

    while(ir < right.length){
        result.push(right[ir++])
    }

    return result
}

function mergeSort(arr){ 
    return mergeSortRec(arr)
}

function create(size){
    let arr = []
    for(let i = size; i > 0; i--){
        arr.push(Math.floor((Math.random() * 100)+1))
    }
    return arr
}

console.log(mergeSort(create(10)))