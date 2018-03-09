
  function ubahHuruf(kata) {
 var kamus = 'abcdefghijklmnopqrstuvwxyz';
 var array = [];
 for (var i = 0 ; i< kata.length ;i+=1 ){
   array.push(kamus[kamus.indexOf(kata[i])+1]);

  }
 return array.join('');
}
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
