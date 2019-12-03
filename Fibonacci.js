const Fib = function(n){

// Base case
if (n < 2){
return n  
}
// General Case 
return Fib(n -1) + Fib(n -2)

}

let n = 7
console.log(Fib(n))