function prefill(n, v) {
  let size = new Number(n);
 
  //console.log(Number.isInteger(n));
  if(typeof n ==='boolean' || isNaN(size) || !isFinite(size) || size<0){
    throw new TypeError(n +' is invalid');
  }
  var arr = [];
  try{
  arr.length=size;
  arr.fill(v);
  }catch(e){
    throw new TypeError(n+ ' is invalid');
  }
  return arr;
}