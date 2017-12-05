//http://www.codewars.com/kata/function-composition-1/train/javascript

function compose() {
  // Your solution
  var arrFunc = [];
  for(i=0;i<arguments.length;i++){
    arrFunc.push(arguments[i]);
  }
  return function (arg){
    while(arrFunc.length>0){
      arg = arrFunc.pop()(arg);
    }
    
    return arg;
  };
}