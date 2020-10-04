let { Stack } = require('./stack')

// 平衡括号问题
function balanceBrackets(symbols){
    let list = new Stack();
    let opens = '{[(' //匹配左边的括号
    let closer = '}])' //匹配右边的括号
    let blance = true // 是否平衡的标识
    let index = 0 // 循环索引
    let symbol // 括号字符串中的某一个字符
    let top // 栈中弹出的左边括号

    while(index < symbols.length && blance){
        symbol = symbols[index]
        if(opens.indexOf(symbol)>=0){
            list.push(symbol)
        }else if(list.isEmpty()){
            blance = false
        }
        else{
            top = list.pop()
            if(!(closer.indexOf(symbol) === opens.indexOf(top))){
                blance = false
            }
        }
        index++
    }
    return blance && list.isEmpty()
}

console.log(balanceBrackets('{[()]}'))
console.log(balanceBrackets('{[()]'))


