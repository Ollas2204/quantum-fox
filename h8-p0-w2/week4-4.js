function cariModus(arr) {
    var jumlahArr = arr.length;
    var counter = "";
    var tampung = [];
    var output = 0;
    var cekAngka = 0;

    for (var i = 0; i < jumlahArr; i++) {
        for (var j = 0; j < jumlahArr; j++) {
            if (i !== j ) {
                if (arr[i] === arr[j]) {
                    counter = counter + 'z';
                    tampung[i] = counter;
                    counter = "";
                }
            }
        }

        if (arr[0] === arr[i]) {
            cekAngka = cekAngka + 1;
        }
    }

    // console.log('=========================');
    // console.log(cekAngka);

    // console.log(tampung[0]);
    // console.log('------------------------')
    if ( (cekAngka === jumlahArr) ) {
        return -1;
    }

    if (tampung.length === 0) {
        return -1;
    }


    for (var k = 0; k < jumlahArr ; k++) {
        if (tampung[k] === 'z') {
            return arr[k];
        }
    }
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
