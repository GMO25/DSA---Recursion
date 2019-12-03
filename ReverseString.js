const reverseStr = function (string){

//Base 
if (string.length === 1){
 return string 
}
//General 
return string[string.length -1].concat(reverseStr(string.slice(0,string.length -1)))


}
let str = 'Hello'
console.log(reverseStr(str))