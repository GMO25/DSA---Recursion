
function jumble(unjumbled, jumbled) {
 if (unjumbled.length) { // if exists? 
     // Iterate all the unjumbled letters and add each of them to the jumbled string
     for (let i = 0; i < unjumbled.length; i ++) {
      //repeat 4 - 3,2,1 times 
         // Recurse
         jumble(
             // This is the unjumbled string minus the letter at i 
             // (basically just the string before + the string after)
             unjumbled.substring(0, i) + unjumbled.substring(i + 1), 
             // This is the jumbled string so far + the letter at i.
             jumbled + unjumbled.substring(i, i + 1) // 
             

         );
     }
 } else {
     // When there's nothing left to jumble we can print out the answer
     console.log(jumbled);
 }
}
// Invoke the method with the word to jumble - don't use a really long word, over 7 letters will really give your
// computer problems
jumble("east", "");


 // east - if exists - 4 repeats of the following: 
             // jumble(ast, jumbled = e) --> 
             //   (st), a | (at), as | (as) + '', e + ast
             // jumble(est), jumbled = a) --> 
                 // st , e | et, es | es , a + est 
             // jumble(eat), jumbled = s)
             // at, e | et, ea | ea , s + eat 
             // jumble (eas), jumbled = t)
             // as, e| es, ea | ea, t + eas