/*
 * @Author: your name
 * @Date: 2020-10-05 18:50:04
 * @LastEditTime: 2020-10-12 20:22:35
 * @LastEditors: Please set LastEditors
 * @Description: 最少硬币找零问题
 * 最少硬币找零问题是给出要找零的钱数，
 * 以及可用的硬币面额d1…dn及其数量，找到所需的最少的硬币个数
 * @FilePath: /js-datastructures-algorithms/algorithms/dynamic-programming/MinCoinChange.js
 */
function  MinCoinChange(params){
    let coins = params
    let cache = {}

    this.makeChange = (amount) => {
        let me = this
        if(!amount){
            return []
        }

        if(cache[amount]){
            return cache[amount]
        }

        let min = [],newMin, newAmount;
        for(let i = 0; i < coins.length; i++){ 
            let coin = coins[i]
            newAmount = amount - coin
            if(newAmount >= 0){
                newMin = me.makeChange(newAmount)
            }
            if(
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ){
                min = [coin].concat(newMin)
                console.log('new Min ' + min + ' for ' + amount); 
            }
        }
        return (cache[amount] = min)
    }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36)); 