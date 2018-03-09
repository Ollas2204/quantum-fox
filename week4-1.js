// function angkaPrima(angka) {
//   for (var i = 2; i < angka; i++) {
//     if (angka % i === 0) {
//       return false
//     }
//   }
//   return true;
// }
//
// //test case
// console.log(angkaPrima(7)); //TRUE
// console.log(angkaPrima(33)); //FALSE
// console.log(angkaPrima(45)); //FALSE
// console.log(angkaPrima(20)); //FALSE
// console.log(angkaPrima(2)); //TRUE
function addEvenOdd (arrNum) {

  let ganjil = 0
  let genap = 0
  let result = [[], []]

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      genap += arrNum[i]

    }else {
      ganjil -= arrNum[i]
    }
  }

    result[1].push(ganjil)
    result[0].push(genap)

  return result
}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]

// function addTitle (people) {
//
//   let data = []
//
//   if (people.length === 0 ) {
//     return 'No data'
//   } else {
//
//     for (var i = 0; i < people.length; i++) {
//
//       if (people[i][1] === 'male') {
//         data.push('Mr. ' + peopnle[i][0])
//       } else if (people[i][1] === 'female') {
//           if (people[i][2] === true) {
//             data.push('Mrs. ' + people[i][0])
//           }else {
//             data.push('Ms. ' + people[i][0])
//           }
//       }
//     }
//
//
//
//   }
//
//   let result = ''
//
//   for (var j = 0; j < data.length; j++) {
//     if (j !== data.length-1) {
//       result += data[j] +', '
//     }else {
//       result += data[j]
//     }
//
//   }
//
//   return result;
//
// }
//
// console.log(addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]])); // Mr. Sergei, Ms. Alyona
//
// console.log(addTitle([['Dimitri', 'male', false], ['Anastasia', 'female', false], ['Vladlena', 'female', true]])); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena
//
// console.log(addTitle([])); // No data
