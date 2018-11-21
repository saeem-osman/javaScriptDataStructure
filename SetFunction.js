//creating a set function

function mySet() {
  //this var collection will hold the set
  var collection = [];
  //this method will check the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  //this will return all the values of the set
  this.values = function() {
    return collection;
  };

  //this method will add element in the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  //this method will remove element from the set
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  //this method will return the lenght of a set
  this.size = function() {
    return collection.length;
  };
  //this will create union of two set
  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //this method will interset the two sets

  this.intersectoin = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the values of set A which are not in set B

  this.diffeference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  //this method will check if a set is a subset of another set
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

//create set A and set B
var setA = new mySet();
var setB = new mySet();
setA.add("A");
setB.add("A");
setB.add("C");
setA.add("C");
setA.add("D");
console.log(setA.subset(setB));

console.log(setA.values());
console.log(setA.diffeference(setB).values());
console.log(setA.union(setB).values());
console.log(setA.values());
console.log(setA.intersectoin(setB).values());
