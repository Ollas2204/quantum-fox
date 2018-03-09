// segitiga =======================
let atas = ''
for (let i = 0; i < 5; i++) {
  atas = ''
  for (let j = 16; j > i; j--) {
    atas += ' '
  }
  for (let k = 0; k <= i*2; k++) {
    atas +='*'
  }
  console.log(atas);
}
// segitiga terbalik================
let atas2 = ''
for (let i = 5; i > 1; i--) {
  atas2 = ''
  for (let j = i; j < 18; j++) {
    atas2+= ' '
  }
  for (let k = i*2; k > 3; k--) {
    atas2 += '*'
  }
  console.log(atas2);
}
// jajargenjang + segitiga + persegi =
let jjg = ''
for (let i = 0; i < 5; i++) {
  jjg = ''
  for (let j = 5; j > i; j--) {
    jjg += ' '
  }
  for (let k = 0; k < 11; k++) {
    jjg += '*'
  }
  for (let l = 0; l <= i*2; l++) {
    jjg +=' '
  }
  for (let m = 0; m < 11; m++) {
    jjg += '*'
  }
  console.log(jjg);
}
