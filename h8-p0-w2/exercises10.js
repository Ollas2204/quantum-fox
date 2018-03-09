//Logic Challenge - Bandingkan Angka

var angka1 = 5;
var angka2= 6;
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
    return true;
  }
 else if (angka1 > angka2){
      return false;
  } else {
    return 'besaran angka adalah Sama';
  }
}
console.log(bandingkanAngka(angka1, angka2));
