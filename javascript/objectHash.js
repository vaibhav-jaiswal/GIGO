// return the nested property value if it exists,
// otherwise return undefined
// ..http://www.codewars.com/kata/extract-nested-object-reference/train/javascript
Object.prototype.hash = function(argument) {
  var j=this;
  
  var index= argument.indexOf('.');
  if(index>-1){
    var key = argument.substring(0,index);
    var obj = j[key];
    if(obj === undefined)
      return undefined;
    return j[key].hash(argument.substring(index+1,argument.length));
  }
  return j[argument];
  
}