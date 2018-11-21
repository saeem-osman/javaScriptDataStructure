function priorityQueue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    if (collection.length == 0) {
      return collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (collection[1] < collection[i][1]) {
          return collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        return collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length == 0;
  };
}

var pq = new priorityQueue();
console.log(pq.isEmpty());
pq.enqueue("Hello", "1");
console.log(pq.isEmpty());
pq.print();
pq.enqueue("Bangladesh", "1");
pq.enqueue("saeem", "5");
pq.print();
pq.enqueue("osman", "5");
pq.print();
