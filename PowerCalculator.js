const PowerCalculator = function (B,Exp){
 if(Exp < 0) {
  return console.log('exponent should be >= 0')
 }
 //Base case
if (Exp === 1){
  return B * Exp
}
return B * PowerCalculator(B,Exp - 1) 


}

console.log(PowerCalculator(10,2))

//const result = B * PowerCalculator(B, Exp -1)
// console.log(result)
// multiply 10 * powercaculator(10,1) = which is 10 so 10 * 10 
// But if its 10,2 - what happens? nothing. how do we use 10,2? 