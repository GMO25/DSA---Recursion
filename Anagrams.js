const anagramReLi = function (word){

 this.word = word;
 let newWord = word;
 let jumbledRest = []

 for( i = 0; i < this.word.length; i ++){
  
  newWord = word.replace(word[i],'')
 
  for (k = 0; k < this.word.length - 1; k ++){
   Letters = newWord[k]
   jumbledRest.push(word[i] + Letters + newWord.replace(Letters, ''))
   Letters2 = newWord.replace(Letters,'')
   let Jumble2 = Letters2[1] + Letters2[0]
   jumbledRest.push(word[i] + Letters + Jumble2)
   }
   
 }
 
 //console.log(jumbledRest)


}
let word = 'east'
anagramReLi(word)

const AnagramReLiRecursion = function (N,word){
   //N = word.length 
let jumbledRest = []
 if (N > word.length - 1){
  return 
 }
//remove a letter from word 
let toJumble = word.replace(word[N],'') 
console.log(toJumble)
for (k = 0; k < this.word.length - 1; k ++){  
 Letters = toJumble[k] 
 jumbledRest.push(word[N] + Letters + toJumble.replace(Letters, '')) 
 Letters2 = toJumble.replace(Letters,'') 
 let Jumble2 = Letters2[1] + Letters2[0]  
 jumbledRest.push(word[N] + Letters + Jumble2)  
 }
console.log(jumbledRest)
AnagramReLiRecursion(N + 1, word)


}
let wordRec = 'east'
AnagramReLiRecursion(0,wordRec)
