for (var i = 0; i < 5; i++) {
  segitiga = ' '
  for (var j = 5; j > i; j--) {
    segitiga += ' '
  }
  for (var k = 0; k <= i*2 ; k++) {
    segitiga += 'o'
  }
  console.log(i + segitiga);
}


//      o
//     ooo
//    ooooo
//   ooooooo
//  ooooooooo


//x       ooooooooo
//xx      ooooooo
//xxx     ooooo
//xxxx    ooo
//xxxxx   o

//ooooooooo
//ooooooo
//ooooo
//ooo
//o
