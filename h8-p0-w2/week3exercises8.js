function pasanganTerbesar(num) {
// you can only write your code here!

var simpan= [];
for (var i = 0; i < String(num).length-1; i++) {
//console.log(String(num)[i]+ String(num)[i+1]);
simpan.push(String(num)[i]+ String(num)[i+1]);
   }
   simpan.sort()
 return Number(simpan[simpan.length - 1]);
 }

// // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
//console.log(pasanganTerbesar(12783456)); // 83
//console.log(pasanganTerbesar(910233)); // 91
//console.log(pasanganTerbesar(71856421)); // 85
//console.log(pasanganTerbesar(79918293)); // 99

//
// let kata = 'javascript'
//
// console.log(kata.split(''));
