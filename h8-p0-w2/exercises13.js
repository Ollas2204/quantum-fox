function xo(str) {
var countX = 0 ;
var countO = 0 ;
 for( var index= 0; index <= str.length; index++){
  if(str[index]=== 'x') {
     countX++
  }
  else if(str[index]=== 'o') {
      countO++
  }
}
if (countX === countO) {
      console.log(true);
    }
    else {
      console.log(false);
    }

}

// TEST CASES
xo('xox'); // true
