function tukarBesarKecil(kalimat) {
  var tukarHurufBk = "";

  for (var i = 0; i < kalimat.length; ++i) {
    var huruf = kalimat[i];
    // console.log(huruf);

    if (huruf === huruf.toUpperCase()) {
      tukarHurufBk += huruf.toLowerCase();
    } else if (huruf === huruf.toLowerCase()) {
      tukarHurufBk += huruf.toUpperCase();
    } else {
      tukarHurufBk += huruf;
    }
  }

  return tukarHurufBk;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
