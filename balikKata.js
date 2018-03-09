function palindrome(kata) {
  // you can only write your code here!
  var tampung = ''
for (var i = kata.length-1 ; i >= 0; i--) {
  tampung += kata[i]
}


return tampung === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
