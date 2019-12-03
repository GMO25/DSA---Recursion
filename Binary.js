
const binary = function (number){

if (number > 1){
  binary(number/2)
  console.log(Math.floor(number) % 2)
}

}

let N = 10;
binary(N)

// first call 10 yes its greater than 1 - number 5 yes 2.5 - number 2/2  yes 1
// 3 < 1 - Y; 3/2 = 1.5 - Y; 1.5/2 = 0.75 - N 
// console.log() 
