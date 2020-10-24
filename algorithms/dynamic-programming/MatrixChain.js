/*
 * @Author: your name
 * @Date: 2020-10-24 18:03:18
 * @LastEditTime: 2020-10-24 20:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-datastructures-algorithms/algorithms/dynamic-programming/MatrixChain.js
 */

 // 最小乘法次数
function MatrixChain(p){
    let num = p.length-1// 矩阵的个数
    let m = [] // 用来存储m[i,j],表示Ai~j的最小乘法次数
    let s = [] // 存储矩阵下标
    let d //对角线
    let template // 相乘次数

    for(let i = 1; i <= num; i++){
        m[i] = []
        m[i][i] = 0

        s[i] = []
        s[i][i] = 0
    }

    for(d = 1; d <= num-1; d++){  // d的范围 = 1 ~ 矩阵个数-1
        for(let i = 1; i <= num - d; i++){ // i的最小范围为1，最大范围 = 矩阵个数-d
            j = i + d // j = d + i
            m[i][j] = Number.MAX_SAFE_INTEGER; 
            for(let k = i; k <= j - 1; k++){
                template = m[i][k] + m[k+1][j] + p[i-1]*p[k]*p[j]; 
                if(template < m[i][j]){
                    m[i][j] = template
                    s[i][j] = k
                }
            }
        }
    }
    printOrder(s, 1, num); 
    return m[1][num]
}

// 最优解的括号顺序
function printOrder(s,i,j){
    if (i == j) {
        console.log("A[" + i + "]");
    } else {
        console.log("(");
        printOrder(s, i, s[i][j]);
        printOrder(s, s[i][j] + 1, j);
        console.log(")");
    } 
}

let p=[10, 100, 5, 50]
console.log('最小乘法次数：',MatrixChain(p))