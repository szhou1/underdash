(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    //return the val
    return val;
  };

  // var _ = function(obj) {
  //   if (obj instanceof _) return obj;
  //   if (!(this instanceof _)) return new _(obj);
  //   this._wrapped = obj;
  // };
  //
  // this._ = _;

  // each()
  // accepts a collection and a callback function, doesn't return anything,
  // loop though collection and sends the values of the collection to the callback function
  // each does not transform any elements, only iterates through them
  _.each = function(collection, callback) {
    if (Array.isArray(collection)) {
      // collection is array
      for (var i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      // collection is object
      for (var key in collection) {
        callback(collection[key], key, collection);
      }
    }
  };

  // map
  // creates a new array from sending collection to callback
  // _.map = function(collection, callback) {
  //   var array = [];
  //   _.each(collection, function(param) {
  //     array.push(callback(param));
  //   });
  //   return array;
  // };
  //
  // // reduce
  // // iterates through a collection and boils it down to a single value via callback function
  // _.reduce = function(collection, callback, memo) {
  //   _.each(collection, function(param) {
  //     memo = callback(memo, param);
  //   });
  //   return memo;
  // };
  //
  // // ReduceRight
  // // exactly the same as reduce but from starting from the end of the array
  // _.reduceRight = function(collection, callback, memo) {
  //   _.each(collection.reverse(), function(param) {
  //     memo = callback(memo, param);
  //   });
  //   return memo;
  // };
  //
  // // filter
  // // creates a new collection and populates it based on the filter criteria
  // _.filter = function(collection, callback) {
  //   var array = [];
  //   _.each(collection, function(param) {
  //     if (callback(param)) {
  //       array.push(param);
  //     }
  //   });
  //   return array;
  // };

  var arr = [];

}());
