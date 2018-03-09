function palindrome(kata) {
  // you can only write your code here!

  // let baru = ''
  // for (var i = kata.length - 1; i >= 0; i--) {
  //   baru += kata[i]
  // }
  // if( baru === kata ){
  //   return true
  // } else {
  //   return false
  // }

  return kata.split('').reverse().join('') === kata
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
