const factorial = function (N){

 if (N <= 1){
  return N 
 }
 return N * factorial(N - 1)

}
let N = 5;
console.log(factorial(N))