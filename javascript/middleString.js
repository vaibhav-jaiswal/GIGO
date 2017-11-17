function getMiddle(s)
{
  var length = s.length;
  var middle = length/2;
  var even = length%2===0?1:0; 
  return s.slice(middle-even,middle+1);
}