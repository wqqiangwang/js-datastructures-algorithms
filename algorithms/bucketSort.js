/*
 * @Author: your name
 * @Date: 2020-10-04 16:30:43
 * @LastEditTime: 2020-10-04 17:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-datastructures-algorithms/algorithms/bucketSort.js
 */

let insertSort = (array) => {
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


const createBuckets = (array, bucketSize) => {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      } else if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
      let idx = Math.floor((array[i] - minValue) / bucketSize)
      buckets[idx].push(array[i]);
    }
   
    return buckets;
  }

const sortBuckets = (buckets) => {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] != null) {
        insertSort(buckets[i]);
        sortedArray.push(...buckets[i]);
      }
    }
    return sortedArray;
  }

const bucketSort = (array, bucketSize = 5) => {
    if (array.length < 2) {
        return array;
    }
    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
}

const create = (size) => {
    let arr = []
    for(let i = size; i > 0; i--){
        arr.push(Math.floor((Math.random() * 100)+1))
    }
    return arr
}

console.log(bucketSort(create(10), 5))