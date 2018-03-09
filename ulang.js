var bintang = ''

for (var i = 0 ; i < 5; i++) {

  bintang = '';

    for (var j = 0 ; j <= i ; j++) {

      if (i % 2 === 0) {
        bintang += 'x';
      } else {
        bintang += 'o'
      }
    }
  console.log(bintang);
}
