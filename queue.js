//creating a queqe function

function myQueue() {
  //this var will take the all enqueue items
  var collection = [];
  this.enqueue = function(element) {
    return collection.push(element);
  };
  //this will remove the first item from the list
  this.dequeue = function() {
    return collection.shift();
  };
  //this will show the first item of a list
  this.front = function() {
    return collection[2];
  };
  this.size = function() {
    return collection.length;
  };
  //this will check if a function is empty or not

  this.isEmpty = function() {
    return collection.length === 0;
  };
  this.print = function() {
    return console.log(collection);
  };
  this.rear = function() {
    var l = collection.length;
    return collection[l - 1];
  };
}
var q = new myQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("w");
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();
q.enqueue("x");
q.enqueue("y");
q.dequeue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("w");
console.log(q.front());
console.log(q.rear());
