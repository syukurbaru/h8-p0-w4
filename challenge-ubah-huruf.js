function ubahHuruf(kata) {
  var newKata = "";
  var hasil = "";
  // buat variabel sebagai kamus
  var abjad = "abcdefghijklmnopqrstuvwxyz";

  // lakukan looping untuk mengecek isi kata dan rubah ke huruf depannya
  for (var i = 0; i < kata.length; i++) {
    newKata = abjad.indexOf(kata[i]);
    // console.log(newKata);

    hasil += abjad[newKata + 1];
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
