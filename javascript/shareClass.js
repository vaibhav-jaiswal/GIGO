// Let's make a Cat constructor!
var Cat = (function () {
 // ... your code here.
 
 return  function Cat(catName,catWeight){
   if(!catName || !catWeight){
     throw new Error();
   }
   var obj = Object.create(this);
   Object.defineProperties(obj,{
     name:{
       value: catName,
       
     },
     weight:{
      
       get : function(){return this.value;},
       set : function(val) { this.value = val;}
     }
     
   });
   obj.weight = catWeight;
   
   if(!Cat.cats){
     Cat.cats = [];
   }
   Cat.cats.push(obj);
   return obj;
 }
}());

Cat.averageWeight = function (){
  var sum=0;
  var len = this.cats.length;
  
  for(i=0;i<len;i++){
    sum = sum+ this.cats[i].weight;
  }
  return sum/len;
}