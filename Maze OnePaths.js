let mySmallMaze = [
 [' ', ' ', ' '],
 [' ', '*', ' '],
 [' ', ' ', 'e']
];

let maze = [
 [' ', ' ', ' ', '*', ' ', ' ', ' '],
 ['*', '*', ' ', '*', ' ', '*', ' '],
 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 [' ', '*', '*', '*', '*', '*', ' '],
 [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const pathFinder = function (mze){
 
 this.mze = mze;
let direction = [];

 this.traverse = function (Y,row){
  
 if (this.mze[Y][row] === 'e'){
  console.log(direction)
 return console.log(`Index  Y:${Y} X:${row} end`)
  let UpDown = direction.map(d => d[0]) 
  let crossX = direction.map(d => d[1])

 }
 if (this.mze[Y][row] === ' '){
  
   direction.push([Y,row])
  
   this.mze[Y][row] = 'u';
  
   if ([Y]< this.mze.length - 1){

      this.traverse(Y+ 1, row)
   
   }
   if ([row] < this.mze[Y].length - 1){
   
    this.traverse(Y, row + 1)
      
   }
   if ([Y] > 0){
     this.traverse(Y-1, row)
   }
   if ([row] > 0){
   
    this.traverse(Y,row-1)
   }
 }
 
 }
}

let superSmallMaze = ['','*']

var msLarge = new pathFinder(maze)

msLarge.traverse(0,0)



