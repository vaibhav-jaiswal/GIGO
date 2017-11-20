function countWords(str) {
  // ...
  var arr = str.trim().split(/\s+/i);
  if(arr.length==1 && arr[0]==='')return 0;
  return arr.length;
}