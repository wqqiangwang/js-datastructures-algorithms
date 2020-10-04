let { Stack } = require('./stack')

// 十进制转换二进制
function divideBy2(decNumber){
    let remStack = new Stack();
    let binaryString = ''

    while(decNumber>0){
        remStack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }

    while(!remStack.isEmpty()){
        binaryString += remStack.pop()
    }
    return binaryString;
}

console.log(divideBy2(10))

// 十进制转换成任意进制
function baseConverter(decNumber, base){
    let remStack = new Stack()
    let binaryString = ''
    let str = '0123456789ABCDEF'

    while(decNumber>0){
        remStack.push(decNumber % base)
        decNumber = Math.floor(decNumber / base)
    }

    while(!remStack.isEmpty()){
        binaryString += str[remStack.pop()]
    }
    return binaryString;
}

console.log(baseConverter(123, 8)); 

