var arr = []
var length = 8
var push = []
for (var i = 0; i < length; i++) {
var angka = length
  arr = []

  for (var j = length; j > i; j--) {

    arr.push(angka)
    angka --

  }
    push.push(arr)
}
console.log(push);
