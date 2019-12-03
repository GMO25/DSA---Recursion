const triangularNumber = function (N) {

 if (N === 1){
  return N 
 }
 return N + triangularNumber(N - 1)

}
let N = 4
console.log(triangularNumber(N))