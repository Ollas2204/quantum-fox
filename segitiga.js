let segitiga = ''

for (var i = 0; i < 5; i++) {
  segitiga = ''
  for (var j = 5; j > i; j--) {
    segitiga += ' '
  }
  for (var k = 0; k <= i*2 ; k++) {
    segitiga += 'o'
  }
  console.log(segitiga);
}


// xxxxx
// xxxx
// xxx
// xx
// x
