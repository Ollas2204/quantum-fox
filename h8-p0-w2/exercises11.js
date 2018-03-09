function balikKata(kata) {
  // you can only write your code here!
  var input = '';
  var hasil = '';
  for ( var index = kata.length-1 ; index >= 0; index--){
    // console.log(kata[index] +" index ke - "+ index);
    hasil = hasil + kata[index]

  }
  // console.log(hasil);
  return hasil;

}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log(balikKata('llevart olos inareb muleb wg ,tanim gnay ada aja uhat apais'));
