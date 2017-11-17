function printArray(array){
  return "".concat(array);
}

function opposite(number) {
    return number * (-1);
}

function basicOp(operation, value1, value2)
{
  var expression = value1 + ' '+ operation + ' '+ value2;
  return eval(expression);
}

function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 7) return total - 50
  if (d >= 3) return total - 20
  return total
}