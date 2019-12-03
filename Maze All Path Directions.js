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

 this.traverse = function (Y,row,route = 'start: '){

   if (this.mze[Y][row] === 'e'){
       console.log(route)
 }
 if (this.mze[Y][row] === ' '){
 
  this.mze[Y][row] = 'u';
 
  if ([Y]< this.mze.length - 1){

     this.traverse(Y+ 1, row, route + 'D')
  
  }
  if ([row] < this.mze[Y].length - 1){
  
   this.traverse(Y, row + 1,route + 'R')
     
  }
  if ([Y] > 0){
    this.traverse(Y-1, row, route + 'U')
  }
  if ([row] > 0){
  
   this.traverse(Y,row-1, route + 'L')
  }
}}


}

let superSmallMaze = ['','*']

var msLarge = new pathFinder(maze)

msLarge.traverse(0,0)