function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var a = []
  var b = ''
  for (var i = 0; i < kalimat.length; i++) {
    b += kalimat[i]

    if (i !== kalimat.length-1) {

      if (kalimat[i] === ' ') {
        a.push(b)
        b = ''
      }

    } else {

      a.push(b)

    }

    }

    return a.length;
    
  }

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
//var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
//console.log(name.length); // 42


//   let jumlah = 1
//   for( var i = 0; i < kalimat.length ; i++){
//
//     if (kalimat[i]===' ') {
//       jumlah += 1
//     }
//   }
// return jumlah

 // var splitted = kalimat.split(' ')
 //
 // return  splitted.length;

//return kalimat.split(' ').length;
// }
