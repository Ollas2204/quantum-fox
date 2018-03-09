function balikString(string) {
  // you can only write your code here!
  var input = '';
  var hasil = '';
  for ( var index = string.length - 1; index >= 0; index--){
    // console.log(kata[index] +" index ke - "+ index);
    hasil = hasil + string[index]

  }
  // console.log(hasil);
  return hasil;

}

// TEST CASES
console.log(balikString('Hello World!'));
