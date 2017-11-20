//#1
// function add(x, y) { return x + y; }
// function mul(x, y) { return x * y; }
// function make(/*???*/) { /* ??? */ }

// var s = make(1)(2)(3)(4)(5);
// Assert(s(add) == 15);
// Assert(s(mul) == 120);
// var x = make(5)(10)(15);
// Assert(x(add) == 30);
// Assert(x(mul) == 750);

function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }
function make(arg) { 
    var arr = [arg]; 
    return function hold(inner){
        if(typeof inner ==='number'){
            
            arr.push(inner);
        }else{
            var value  = arr[0];
            for(i=1;i<arr.length;i++){
                value = inner(value,arr[i]);
            }
            return value;
        }
        return hold;
        
    };
    
}

var s = make(1)(2)(3)(4)(5);
console.log(s(add) == 15);
console.log(s(mul) == 120);
var x = make(5)(10)(15);
console.log(x(add) == 30);
console.log(x(mul) == 750);

