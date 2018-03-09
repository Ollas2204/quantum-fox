//1. Melakukan Looping Menggunakan While
//LOOPING PERTAMA
var looping = 2
while(looping <= 20 ) {
  console.log(looping + ' I love coding' );
  looping += 2
}

//LOOPING KEDUA
var looping = 20 ;
while(looping >= 2 ) {
  console.log(looping + ' I will become fullstack developer' );
  looping -= 2
}

//2. Melakukan Looping Menggunakan For
//LOOPING PERTAMA
for(var looping = 1; looping <= 20; looping++) {
  console.log(looping+' I love coding');
}

//LOOPING KEDUA
for(var looping = 20; looping >= 1; looping--) {
  console.log(looping+' I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
for (var counter = 1; counter <= 100; counter++) {
  if(counter % 2 === 0){
  console.log("Genap");
  }
else('ganjil');{
  console.log("ganjil");
}

}

//3. Angka Ganjil dan Genap
//KELIPATAN 3

for (var counter = 1; counter <= 100; counter+=2) {
  if(counter % 3 === 0){
  console.log(counter + " kelipatan 3");
  }
}

//KELIPATAN 6
for (var counter = 1; counter <= 100; counter+=5) {
  if(counter % 6 === 0){
  console.log(counter + " kelipatan 6");
  }
}

//KELIPATAN 10

for (var counter = 1; counter <= 100; counter+=9) {
  if(counter % 10 === 0){
   console.log(counter + " kelipatan 10");
  }
}
