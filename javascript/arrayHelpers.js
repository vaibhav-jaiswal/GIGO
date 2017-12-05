// TODO
Array.prototype.square = function(){
  var arr = [];
 
  var j = this;
  for(i=0;i<this.length;i++){
    arr[i] = j[i] * j[i];
  }
  
  return arr;
}

Array.prototype.cube = function(){
  var arr = [];
 
  var j = this;
  for(i=0;i<this.length;i++){
    arr[i] = j[i] * j[i] *j[i];
  }
  
  return arr;
}
Array.prototype.sum = function(){
  var result=0;
 
  var j = this;
  for(i=0;i<this.length;i++){
    result = j[i] + result;
  }
  
  return result;
}
//http://www.codewars.com/kata/array-helpers/train/javascript
Array.prototype.average = function(){
  if(this.length<=0) return NaN;
  var result=0;
  var j = this;
  for(i=0;i<this.length;i++){
    result = j[i] + result;
  }
  
  return result/this.length;
}

Array.prototype.even = function(){
  var arr=[];
  var j = this;
  for(i=0;i<this.length;i++){
    if(j[i]%2==0)
      arr.push(j[i]);
  }
  
  return arr;
}

Array.prototype.odd = function(){
  var arr=[];
  var j = this;
  for(i=0;i<this.length;i++){
    if(j[i]%2==1)
      arr.push(j[i]);
  }
  
  return arr;
}