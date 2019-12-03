const stringSplitter = function (string) {


if (!string.includes('/')){
 return [string]
}

// return  
 return stringSplitter(string.replace('/','","'))

}
let string = "02/20/2020"
console.log(stringSplitter(string))