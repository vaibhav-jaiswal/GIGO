function zero(operator) {
 var operand = 0;
  if(!operator){return operand;}
  return operator(operand);
}
function one(operator) {
 var operand = 1;
  if(!operator){return operand;}
  return operator(operand);
}
function two(operator) {
 var operand = 2;
  if(!operator){return operand;}
  return operator(operand);
}
function three(operator) {
 var operand = 3;
  if(!operator){return operand;}
  return operator(operand);
}
function four(operator) {
 var operand = 4;
  if(!operator){return operand;}
  return operator(operand);
}
function five(operator) {
 var operand = 5;
  if(!operator){return operand;}
  return operator(operand);
}
function six(operator) {
 var operand = 6;
  if(!operator){return operand;}
  return operator(operand);
}
function seven(operator) {
 var operand = 7;
  if(!operator){return operand;}
  return operator(operand);
}
function eight(operator) {
 var operand =8;
  if(!operator){return operand;}
  return operator(operand);
}
function nine(operator) { 
  var operand = 9;
  if(!operator){return operand;}
  return operator(operand);
}

function plus(right) {
  return function(left){
    return left + right;
  }
}
function minus(right) {
  return function(left){
    return  left - right;
  }
}
function times(right) {
  return function(left){
    return left * right;
  }
}
function dividedBy(right) {
  return function(left){
    return  left / right;
  }
}