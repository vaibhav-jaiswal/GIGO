function add(n){
  // Let the currying begin!
  var sum;
  if(typeof sum ==='undefined'){
    sum=0;
  }
  sum=sum+n;
  return function sumfunction(val){
   if(typeof val === 'undefined')
     return sum;
    sum=sum+val;
    return sumfunction;
    
  };
}