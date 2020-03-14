function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // Cari pasangan perkalian
  var mknFaktor = [];
  for (var i = 0; i < angka; i++) {
    if (angka % (i + 1) == 0) {
      mknFaktor.push(i + 1);
    }
    // console.log(mknFaktor);
  }
  var minDigit = 1 + String(mknFaktor[mknFaktor.length - 1]).length; // Inisialisai
  // console.log(minDigit);

  for (var i = 1; i < Math.ceil(mknFaktor.length / 2); i++) {
    var nextDigit =
      String(mknFaktor[i]).length +
      String(mknFaktor[mknFaktor.length - 1 - i]).length; // Periksa pasangan faktor
    if (nextDigit < minDigit) {
      minDigit = nextDigit; // Isi dengan baru
    }
  }
  // console.log(nextDigit);
  return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
