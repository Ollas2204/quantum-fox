function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit / 60;
  var pembulatan = Math.floor(jam);
  var mm = menit % 60 ;

  // if (mm < 10) {
  //   return pembulatan +':0' +mm
  // } else {
  //   return pembulatan +':' +mm
  // }
//========================================
    // if (mm.toString().length === 1 ) {
    //   return pembulatan +':0' +mm
    // } else {
    //   return pembulatan +':' +mm
    // }
//=========================================
return mm < 10 ? pembulatan +':0' +mm : pembulatan +':' +mm

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
