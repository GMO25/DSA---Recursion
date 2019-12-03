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

 this.traverse = function (X,Y, direction, route){
    if (this.mze[Y][X] == 'e'){
      console.log(route)
    }
    else {
     for (let i = 0; i < 3; i ++){
      let side = (direction + i + 1) % 4
      if(side == 1){
        // go up 
        if(Y > 0 && this.mze[Y-1][X] != '*'){
          this.traverse(X,Y -1,3,route +'U')
        } 
      } else if (side == 2){
        // go right
        if(X < this.mze[Y].length && this.mze[Y][X + 1] != '*'){
          this.traverse(X + 1,Y,2,route +'R')
        } 
      } else if (side == 3){
        // go down
        this.traverse(X,Y + 1,1,route +'D')
      } else if (side == 4){
        // go left
        this.traverse(X -1,Y,4,route +'L')
      }
     }
     
    }
 }
}

let superSmallMaze = ['','*']

let newmaze = 
[
['e','*'],
['','*'],
['','*'],
]


var msLarge = new pathFinder(maze)

msLarge.traverse(0,0,1,'')



