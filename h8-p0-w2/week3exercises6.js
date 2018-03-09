function angkaPalindrome(num) {
  // you can only write your code here!

num ++

let balik = +(String(num).split('').reverse().join(''))

if (num === balik) {
  return balik
}else {
  return angkaPalindrome(num)
}

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// num = num +1
//
// while (true) {
//
//   let balik = String(num).split('').reverse().join('')
//
//   if (num === Number(balik)) {
//     break
//   }else {
//   num++
//   }
//
// }
//
// return num
