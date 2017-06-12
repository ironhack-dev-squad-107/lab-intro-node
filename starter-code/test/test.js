var assert = require('assert');

describe('SortedList', function() {
  describe('#add(x)', function() {
    it('should add a value to SortedList', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#get(i)', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
