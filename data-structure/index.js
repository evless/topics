function Stack() {
    this.value = [];

    return this;
}

Stack.prototype.get = function() {
    return this.value.pop()
}

Stack.prototype.add = function(value) {
    this.value.push(value);

    return this;
}

const stack = new Stack();

stack.add(1).add(2).add(3).add(4)

console.log(stack.value)
console.log(stack.get())
console.log(stack.get())
console.log(stack.value)

console.log('it was stack -----')


function Queue() {
    this.value = [];

    return this;
}

Queue.prototype = Object.create(Stack.prototype)
Queue.prototype.constructor = Queue;
Queue.prototype.get = function() {
    return this.value.shift();
}

const queue = new Queue();

queue.add(1).add(2).add(3).add(4)

console.log(queue.value)
console.log(queue.get())
console.log(queue.get())
console.log(queue.value)

console.log('it was queue -----')

const map = new Map();
const SYMB = Symbol('1');

map.set(SYMB, 1)
map.set(Symbol('1'), 2)
map.set(1, 3)
map.set(1, 4)

console.log(map.get(SYMB))
console.log(map)

console.log('it was map -----')