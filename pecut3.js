function statistik(kata, arr1, arr2) {
	// tulis kode HANYA disini
  var min1 = arr1[0]
  var min2 = arr2[0]
  var max1 = 0
  var max2 = 0

  for (let i = 0; i < arr1.length; i++) {

    if (min1 > arr1[i]) {
      min1 = arr1[i]
    }

    if (max1 < arr1[i]){
      max1 = arr1[i]
    }

  }

  for (let i = 0; i < arr2.length; i++) {

    if (min2 > arr2[i]) {
      min2 = arr2[i]
    }

    if (max2 < arr2[i]) {
      max2 = arr2[i]
    }

  }

  if (kata === 'min') {
    return min1 + ', ' + min2
  }
     return max1 + ', ' + max2;
  }

  // return kata === 'min' ? min1 + ', ' + min2 :  max1 + ', ' + max2 ;

console.log(statistik('min', [1, 1, 1] , [8, 15, 17, 9]));// 1 8
console.log(statistik('max', [4, 8, 9, 12] , [33, 88, 99 ,11]));// 12 99
//console.log(statistik('min', [1, 2, 5, 2, 2] , [67, 45, 55]));// 1 45
//console.log(statistik('max', [6, 2, 4, 10, 8, 2] , [6, 5, 13, 23]));// 10 23
//console.log(statistik('min', [5, 11, 18, 6], [3, 1, 8, 13]));// 5 1
