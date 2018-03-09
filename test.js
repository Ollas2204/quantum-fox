//1
//22
//333
//4444
//55555
//for (var i = 1; i <= 5; i++) {
  //let tampung = ''
  //for (var j = 1; j <= i ; j++) {
    //tampung += i
  //}
  //console.log(tampung);
//}
//============================================================================
// o
// xx
// ooo
// xxxx
// ooooo

// for (var i = 1; i <= 5; i++) {
//   var tampung = ''//reset hasil looping dr 0
//   for (var j = 1; j <= i ; j++) {
//     // var tampung di ganti untuk print if hasil yg di inginkan
//     if (i % 2 === 0) {
//       tampung += 'x'
//     }
//     else {
//       tampung += 'o'
//     }
//   }
//   console.log(tampung);
//}


// function something(angka) {
//   var tampung = angka // pertambahan value var dimulai dari 0 coz angka
// for (var i = angka - 3 ; i >= -10; i-=3) {
//   console.log(i);
//   tampung = tampung + i// var tampung di dapet dari looping, yang penjumlahannya
//   console.log("-->",tampung);
//   // ke next value maka += 1
//   // console.log(tampung);
//
// }
//  return tampung
// }
//
// console.log(something(5));//15 == 1 + 2 + 3 + 4 + 5 = 15  -->
// console.log(something(3));//6 == 1 + 2 + 3 = 6


function gg(arrnumber) {
for (var i = 0; i < arrnumber; i++) {
  var genap = 0
  var ganjil = 0
  if (arrnumber % 2 === 0) {
    genap = genap + 1
  }
  else if(arrnumber % 2 !== 0) {
    ganjil = ganjil + 1
  }
}
}
console.log(arrnumber);





console.log(gg([3,5,7,8,10]);//[15, 18]
