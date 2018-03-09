function uniqueFinder(sentence) {
  //your code here

  sentence = sentence.toLowerCase()
  let splitted = []
  let kata = ''

  if (sentence.length === 0) {
    return 'NO WORDS'
  }

  for (var i = 0; i < sentence.length; i++) {

    if (i !== sentence.length-1) {

      if (sentence[i] !== ' ') {

        kata += sentence[i]

      } else {

        splitted.push(kata)
        kata = ''

      }

    } else {

        kata += sentence[i]
        splitted.push(kata)

    }
  }

  let removeSame = []

  for (var j = 0; j < splitted.length; j++) {

    for (var k = 0; k < splitted.length; k++) {
      if (j !== k && splitted[j] === splitted[k]) {
        splitted[k] = ''
      }

    }

    removeSame.push(splitted[j])

  }

let result = []

for (var l = removeSame.length-1; l >= 0 ; l--) {

  if (removeSame[l] !== '') {

    result.unshift(removeSame[l])

  }

}

return result;

}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'
