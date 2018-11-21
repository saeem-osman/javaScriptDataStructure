//create a stack

var Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function() {
    if (this.count == 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  };

  this.peek = function() {
    return this.storage[this.count - 1];
  };

  this.size = function() {
    return this.count;
  };
};

var newStack = new Stack();

newStack.push(45);
newStack.push(44);
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.size());
newStack.push("Hello Bangladesh");
console.log(newStack.peek());
