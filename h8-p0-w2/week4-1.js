function angkaPrima(angka) {
  for (var i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return false
    }
  }
  return true;
}

//test case
console.log(angkaPrima(7)); //TRUE
console.log(angkaPrima(33)); //FALSE
console.log(angkaPrima(45)); //FALSE
console.log(angkaPrima(20)); //FALSE
console.log(angkaPrima(2)); //TRUE
