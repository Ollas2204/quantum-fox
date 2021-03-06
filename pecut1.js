// Instruksi
// =========
// Buatlah sebuah function bernama drawSymbolicRows yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
// Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()), dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:
// contoh 1 (drawSymbolicRows(3)):
// baris-1: @
// baris-2: $
// baris-3: *
// contoh 2 (drawSymbolicRows(7)):
// baris-1: @
// baris-2: $
// baris-3: *
// baris-4: $
// baris-5: @
// baris-6: $
// baris-7: @
//
// contoh 3 (drawSymbolicRows(1)):
// baris-1: @
// Note: baris dimulai dari 1.
// tinggi kotak sesuai dengan nilai variable height!
function drawSymbolicRows(height) {

  for (var i = 1; i <= height; i++) {

    if (i % 3 === 0 && i % 2 !== 0) {

      console.log('baris-' + i + ' *' );

    } else if (i % 2 !== 0) {

      console.log('baris-' + i + ' @' )

    } else {

      console.log('baris-' + i + ' $' )

    }

  }

}

 drawSymbolicRows(7);
