//Mengenal Penggunaan Function
//Tugas 1
function shoutOut(test) {
  return test;
}
console.log(shoutOut("Halo Function!"))

//Tugas 2
var num1= 5;
var num2= 6;

function calculateMultiply(num1, num2) {
  return num1 * num2;
}
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence( name, age, address, hobby) {
  return 'nama saya '+ name +', umur saya '+ age +'tahun' +', alamat saya di' + address +', dan saya punya hobby yaitu ' + hobby;
}

var fullSentence = processSentence(name , age , address , hobby);
console.log(fullSentence);
