var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2() {
  var arr0 = input[0];
  var arr = input[1].split(' ');
   arr.push('Elsharawy');
   input.splice(1, 1, arr.join(' '));
  var arr1 = input[2].split('');
   arr1.unshift('Provinsi ');
   input.splice(2,1, arr1.join(''));
    var arr2 = input.splice(3,1);
    var arr3 = ''+arr2;
    var arr4 = input.splice(3,1);
    input.push("21/05/1989",'pria', "SMA Internasional Metro");
var arr5 = [21, 05, 1989];
var arr6 = [21, 05, 1989];
console.log(input);


  var bulan = 05 ;
  var bulanPurnama = arr2;
       switch(bulan) {
    case 1:   { bulanPurnama =' januari '; break; }
    case 2:   { bulanPurnama = 'februari'; break; }
    case 3:   { bulanPurnama =' maret '; break; }
    case 4:   { bulanPurnama =' april '; break; }
    case 5:   { bulanPurnama =' mei '; break; }
    case 6:   { bulanPurnama =' juni '; break; }
    case 7:   { bulanPurnama =' july '; break; }
    case 8:   { bulanPurnama =' agustus '; break; }
    case 9:   { bulanPurnama =' september '; break; }
    case 10:  { bulanPurnama =' oktober '; break; }
    case 11:  { bulanPurnama =' november '; break; }
    case 12:  { bulanPurnama =' desember '; break; }
  }

  console.log(bulanPurnama);
  arr5.sort();
console.log(arr5);
console.log(arr6.join('-'));
var arr7 = input.splice(1,1);
var arr8 = ''+arr7;
var arr9 = arr8.substring(0, 15);
console.log(arr9);

}
dataHandling2()
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
