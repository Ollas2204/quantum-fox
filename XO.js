function xo(str) {
  // you can only write your code here!
var jumlahX = 0
var jumlahO = 0
for (var i = 0; i < str.length; i++) {
if (str[i] === 'x') {
  jumlahX++
} else if (str[i] === 'o') {
    jumlahO++
}

}

if (jumlahX === jumlahO) {
  return true
}

  return false
//return jumlahX === jumlahO ? true : false

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true


// let arr = [3,6,2,5,7,5,6,3,9]
//
// let sort = arr.sort( (a,b) =>  a > b )
//
// console.log(sort);
