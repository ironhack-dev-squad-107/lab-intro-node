var assert = require('assert');

var SortedList = require('../index.js')

describe('SortedList', function() {
  describe('Constructor', function() {
    it('should create an empty SortedList', function() {
      var sl = new SortedList();
      assert.equal(sl.length, 0);
      assert.equal(sl instanceof SortedList, true);
    });
  });

  describe('#add(x)', function() {
    var sl;
    beforeEach(function(){
      sl = new SortedList();
    });
    it('should add a single value to SortedList', function() {
      assert.equal(sl.length, 0);
      sl.add(1);
      assert.equal(sl.length, 1);
    });
    it('should add a second value to SortedList, sorted', function() {
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(1), 10);
      assert.equal(sl.get(2), 20);
    });
    it('should add a third value to SortedList, sorted', function() {
      sl.add(30);
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(1), 10);
      assert.equal(sl.get(2), 20);
      assert.equal(sl.get(3), 30);
    });
  });

  describe('#get(i)', function() {
    var sl;
    beforeEach(function(){
      sl = new SortedList();
    });

    it('should return an OutOfBounds exception if there is no element in that position', function() {
      try {
        sl.get(20);
      } catch (e) {
        assert.equal(e instanceof Error, true)
        assert.equal(e.message, "OutOfBounds")
      }
    })

    it('should return the element in that position', function() {
      var foo = 10;
      for(i=1; i<200; i++) {
        sl.add(foo*i);
        assert.equal(sl.get(i), foo*i);
      }
    });
  });

  describe('sum()', function(){
    var sl;
    beforeEach(function(){
      sl = new SortedList();
    });

    it('should return a NotEnoughElements exception if there are no elements in the list', function() {
      try {
        sl.sum()
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, "EmptySortedList");
      }
    })

    it('should add(sum) all elements of the array if there are elements in the list', function() {
      sl.add(1);
      sl.add(2);
      sl.add(3);
      assert.equal(sl.sum(), 6);
    });
  });
});
