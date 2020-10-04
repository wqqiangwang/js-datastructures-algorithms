function Stack(){

    this.items = [];

    this.push = (ele) => {
        this.items.push(ele)
    }

    this.pop = () => {
        return this.items.pop()
    }

    this.peek = () => {
        return this.items[this.items.length - 1]
    }

    this.isEmpty = () => {
        return this.items.length === 0
    }

    this.clear = () => {
        this.items = []
    }

    this.size = () => {
        return this.items.length
    }

    this.print = () => {
        return this.items.join('-')
    }
}

exports.Stack = Stack;

// let instance = new Stack()

// instance.push(1)
// instance.push(2)
// instance.push(3)
// console.log('pring:',instance.print())
// console.log(instance.pop())
// console.log('pring:',instance.print())
// console.log(instance.peek())
// console.log(instance.isEmpty())
// console.log(instance.size())
// instance.clear()
// console.log(instance.size())





