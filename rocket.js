let segitiga = ''

for (var i = 0; i < 5; i++) {
  segitiga = ' '
  for (var j = 5; j > i; j--) {
    segitiga += ' '
  }
  for (var k = 1; k < i*2 ; k++) {
  segitiga += 'k'
  }
  console.log(segitiga);
}
