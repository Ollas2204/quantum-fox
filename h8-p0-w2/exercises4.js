var tanggal = 5 ;
var bulan = 13 ;
var tahun = 2018;
var bulanPurnama = '';

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
  default:  { console.log('tolong isi bulan'); }
}

console.log(tanggal +  ' ' +bulanPurnama + tahun)
