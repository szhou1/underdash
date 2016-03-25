(function(){

  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  this._ = _;

// each()
// accepts a collection and a callback function, doesn't return anything,
// loop though collection and sends the values of the collection to the callback function
// each does not transform any elements, only iterates through them
  _.each = function(collection, callback){
    if(Array.isArray(collection)){
      // collection is array
      for(var i=0; i<collection.length; i++){
        callback(collection[i]);
      }
    }else{
      // collection is object
      for(var key in collection){
        callback(collection[key]);
      }
    }
  };

// map
// creates a new array from sending collection to callback
  _.map = function(collection, callback){
    var array = [];
    _.each(collection, function(param){
      array.push(callback(param));
    });
    return array;
  };

// filter
// creates a new collection and populates it based on the filter criteria
  _.filter = function(collection, callback){
    var array = [];
    _.each(collection, function(param){
      if(callback(param)){
        array.push(param);
      }
    });
    return array;
  };

// reduce
// iterates through a collection and boils it down to a single value via callback function
  _.reduce = function(collection, callback, memo){
    _.each(collection, function(param){
      memo = callback(memo, param);
    });
    return memo;
  };


}.call(this));
