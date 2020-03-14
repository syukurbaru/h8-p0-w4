function naikAngkot(arrPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  // buat variabel baru untuk menampung hasil
  var result = [];
  // lakukan looping untuk memeriksa variabel
  for (var i = 0; i < arrPenumpang.length; i++) {
    // buat objek untuk memasukan kedalam array result
    var obj = {};
    (obj.penumpang = arrPenumpang[i][0]),
      (obj.naikDari = arrPenumpang[i][1]),
      (obj.tujuan = arrPenumpang[i][2]),
      obj.bayar;
    // console.log(obj);
    // Melooping rute untuk mendapatkan biaya per tujuan
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        var keberangkatan = rute.indexOf(rute[j]);
      }
      if (arrPenumpang[i][2] === rute[j]) {
        var tujuanSampai = rute.indexOf(rute[j]);
      }
    }
    obj.bayar = (tujuanSampai - keberangkatan) * 2000;
    // console.log(obj.bayar);
    result.push(obj);
  }
  return result;
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
