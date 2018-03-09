function cariMean(arr) {
  var tambah = 0
  for (var i = 0; i < arr.length; i++) {
  tambah += arr[i]

  }
  return Math.round(tambah/arr.length)
  }
console.log(cariMean([1, 2, 3, 4, 5])); 
