const Sheep = function (N) {
 //Base Case 
 if (N === 0){
  return console.log('All sheep jumped over the fence')
 }
 //General Case
 console.log(`${N}:Another Sheep jumps over the fence`)
 Sheep(N - 1) 
}

let N = 3
Sheep(N)