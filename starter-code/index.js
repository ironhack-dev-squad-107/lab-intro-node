var SortedList = function() {
  this.length = 0;
  this.items = [];
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b) {
    return a-b;
  });
  this.length++;
}

SortedList.prototype.get = function(pos) {
  if (pos<1 || pos > this.length) {
    throw new Error('OutOfBounds');
  }
  return this.items[pos-1];
}

module.exports = SortedList;
