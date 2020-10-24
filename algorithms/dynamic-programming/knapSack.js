/*
 * @Author: your name
 * @Date: 2020-10-17 10:24:36
 * @LastEditTime: 2020-10-17 17:10:42
 * @LastEditors: Please set LastEditors
 * @Description: 01背包问题
 * @FilePath: /js-datastructures-algorithms/algorithms/dynamic-programming/knapSack.js
 */
function knapSack(capacity, weights, values, n){
    let a, b, ks = [];

    //初始化将用于寻找解决方案的矩阵ks
    for( let i = 0; i <= n; i++){
        ks[i] = []
    }

    for(let i = 0; i<=n; i++){
        for(let w = 0; w <=capacity; w++){
            if( i == 0 || w == 0){ //只处理索引不为0的列和行
                ks[i][w] = 0
            }else if(weights[i-1] <= w){
                a = values[i-1] + ks[i-1][w-weights[i-1]]  // 将第i件放入背包之后的总价值
                b = ks[i-1][w] // 不将第i件放入背包之后的总价值，取能够存入当前容量的上个物品总价值
                ks[i][w] = (a > b)? a : b 
            }else{
                ks[i][w] = ks[i-1][w] 
            }
        }
    }
    return ks[n][capacity] // 输出背包携带物品价值的最大值
}

let capacity = 5; 
let values = [3,4,5];
let weights = [2,3,4]
let n = values.length;
console.log(knapSack(capacity, weights, values, n))