function createFunctions(n) {
  var callbacks = [];
  var indexes = [];
  for (var i=0; i<n; i++) {
  
   
      foo = function (index){
        return index;
      }
    callbacks.push(foo.bind(null,i));
    
  }
  
  return callbacks;
}