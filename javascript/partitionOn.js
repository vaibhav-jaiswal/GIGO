// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var arrTrue=[], arrFalse=[], ret;
  
  for(i=0;i<items.length;i++){
    if(pred(items[i])){
      arrTrue.push(items[i]);
    }else{
      arrFalse.push(items[i]);
    }
  }
  
  for(i=0;i<arrFalse.length;i++){
    items[i] = arrFalse[i];
  }
  ret = i;
  for(j=0;j<arrTrue.length;j++){
    items[i++] = arrTrue[j];
  }
  
  return ret;
}