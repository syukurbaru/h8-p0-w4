function naikAngkot(arrPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];
  var jalan = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var trip = {
      // Membuat objek baru
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      biaya: 0
    };

    var awal = (akhir = 0);
    for (var j = 0; j < rute.length; j++) {
      if (rute[j] == trip.naikDari) {
        awal = j;
      } else if (rute[j] == trip.tujuan) {
        akhir = j;
        break;
      }
    }
    trip.biaya = (akhir - awal) * 2000; // Hitung biaya per tripnya
    jalan.push(trip);
  }
  return jalan;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"]
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
