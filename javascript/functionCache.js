function cache(func) {
  // do your magic here
  var _target = func;
  var cache ={};
  return function(){  
    var key = Array.prototype.join.call(arguments,'|');
    if(cache[key]!=null){
      return cache[key];
    }
    
    var result = _target.apply(null,arguments);
    cache[key]=result;
    return result;
  };
}