function urutkanAbjad(str) {
  // you can only write your code here!

  var arrStr = [];
  // lakukan looping untuk mengambil isi dari str lalu dipush ke arrStr
  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }
  // console.log(arrStr);

  // lakukan sortir dari yang terkecil (ascending)
  for (var i = 0; i < arrStr.length; i++) {
    for (var j = 0; j < arrStr.length; j++) {
      if (arrStr[j] > arrStr[j + 1]) {
        var sementara = arrStr[j];
        arrStr[j] = arrStr[j + 1];
        arrStr[j + 1] = sementara;
      }
    }
  }
  // console.log(arrStr);

  // Mengembalikan dari array kedalam string
  var newAbjad = "";

  for (var i = 0; i < arrStr.length; i++) {
    newAbjad += arrStr[i];
  }
  return newAbjad;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
