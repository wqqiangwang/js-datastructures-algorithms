/*
 * @Author: your name
 * @Date: 2020-09-30 10:25:21
 * @LastEditTime: 2020-10-05 12:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/ArrayList.js
 */
function ArrayList(){
    let array = []

    const getBucketIndex = (value, minValue, significantDigit, radixBase) => 
          Math.floor(((value - minValue) / significantDigit) % radixBase)

    const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
        let bucketsIndex 
        let buckets = []
        const aux = []

        // 初始化桶
        for(let i = 0; i < radixBase; i++){
            buckets[i] = 0
        }

        // 分类统计
        array.forEach( i => {
            // 求待排序元素数值所对应的下标
            bucketsIndex = getBucketIndex(i, minValue, significantDigit, radixBase)
            // 有相同的进行累计
            buckets[bucketsIndex]++
        })

        // 数组元素进行累加,表示已占用位置
        for(let i = 1; i < radixBase; i++){
            buckets[i] += buckets[i-1] 
        }

        // buckets根据下标对待排序元素进行分类统计，idx拿到排好的位置，和待排序元素相对应，排序后写回新数组aux中
        for(let i = array.length -1; i >= 0; i--){
            bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase)
            let idx = --buckets[bucketsIndex]
            aux[idx] = array[i]
        }

        // 将排好序的数组写回原数组
        for (let i = 0; i < array.length; i++) {
            array[i] = aux[i];
        }
        return array;
    }

    const heapify = (array, heapSize, i) => {
        let left = i*2+1
        let right = i*2+2
        let largest = i

        if(left < heapSize && array[left] > array[largest]){
            largest = left
        }

        if(right < heapSize && array[right] > array[largest]){
            largest = right
        }

        if( i !== largest){
            [array[i], array[largest]] = [array[largest], array[i]]
            heapify(array, heapSize, largest)
        }
    }

    const buildHeap = (array) => {
        let heapSize = array.length
        for(let i = array[Math.floor(array.length / 2)]; i >= 0; i--){
            heapify(array, heapSize, i)
        }
    }

    const partition = (array, left, right) => {
        let mid = array[Math.floor((left+right)/2)],
            i = left,
            j = right;

        while( i <= j){
            while(array[i] < mid){
                i++
            }
            while(array[j] > mid){
                j--
            }
            if(i <= j){
                [array[i], array[j]] =  [array[j], array[i]]
                i++
                j--
            }
        }
        return i
    }

    const quick = (array, left, right) => {
        let index
        if(array.length > 1){
            index = partition(array, left, right)
            if(left < index -1){
                quick(array, left, index - 1)
            }
            if(index < right){
                quick(array, index, right)
            }
        }
    }

    const merge = (left, right) => {
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

    const mergeSortRec = (array) => {
        if(array.length === 1){
            return array
        }
        let mid = Math.floor(array.length / 2)
        let left = array.slice(0,mid),
            right = array.slice(mid,array.length)
        return merge(mergeSortRec(left), mergeSortRec(right))
    }

    this.insert = (el) => {
        array.push(el)
    }

    this.toString = () => {
        return array.join('-')
    }

    // 冒泡
    this.bubbleSort = () => {
        let length = array.length

        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - 1; j++){
            //冒泡改进版
            // for(let j = 0; j < length - 1 - i; j++){
                if(array[j]>array[j+1]){
                    [array[j],array[j+1]] = [array[j+1],array[j]]
                }
            }
        }
    }

    // 选择排序
    this.selectionSort = () => {
        let length = array.length,
            minIndex;
        for(let i = 0; i < length - 1; i++){
            minIndex = i;
            for(let j = i; j < length; j++){
                if(array[minIndex] > array[j]){
                    minIndex = j
                }
            }
            if( i !== minIndex){
                [array[minIndex],array[i]] = [array[i],array[minIndex]]
            }
        }
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

    // 归并排序
    this.mergeSort = () => {
        array = mergeSortRec(array)
    }

    // 快排
    this.quickSort = () => {
        quick(array, 0, array.length - 1)
    }

    // 堆排序
    this.heapSort = () => {
        let heapSize = array.length
        buildHeap(array)

        while(heapSize > 1){
            heapSize--
            [array[0],array[heapSize]] = [array[heapSize], array[0]]
            heapify(array, heapSize, 0)
        }
    }

    //计数排序
    this.countSort = () => {
        if(array.length < 2){
            return
        }

        let maxVal = Math.max(...array)
        let sortIndex = 0
        let counts = new Array(maxVal+1)

        array.forEach( ele => {
            if(!counts[ele]){
                counts[ele] = 0
            }
            counts[ele]++
        })

        counts.forEach((ele,i) => {
            while( ele > 0){
                array[sortIndex++] = i
                ele--
            }
        })

        return array
    }

    //桶排序
    this.bucketSort = (s,k) => {
        // 需要参数
        //A排序数组,k桶子数量,s桶子空间尺度
        let A = array
        const buckets = Array.from({length:k}, ()=>[]) //创建桶子
        //把元素放入对应桶子
        for(let i=0; i<A.length; i++){
            //计算需要放入桶子序号
            const idx = ~~(A[i]/s) 
            buckets[idx].push(A[i])
        }

        //对每个桶子进行排序
        for(let i=0; i<buckets.length; i++){
            //此处选取插入排序, 空间消耗少,元素少常数时间消耗短
            this.insertSort(buckets[i])
        }
        
        //把每个桶子数据合并
        return [].concat(...buckets)    
    }

    // 基数排序
    this.radixSort = (radixBase = 10) => {
        // 需要参数
        // array 待排序数组
        // radixBase 划分基数
        if(array.length < 2){
            return 
        }
        const minValue = Math.min(...array)
        const maxValue = Math.max(...array) 
        let significantDigit = 1
        while((maxValue - minValue) / significantDigit > 1){
            array = countingSortForRadix(array, radixBase, significantDigit, minValue)
            significantDigit *= radixBase
        }

        return array
    }
}

function createArr(size){
    let arr = new ArrayList()
    for(let i = size; i > 0; i--){
        arr.insert(Math.floor((Math.random() * 50)+1))
    }
    return arr
}

let array = createArr(10)
array.radixSort(10)
console.log(array.toString())




