function shoppingTime(memberId, money) {
  // Uang yang tersedia
  var uangSisa = money;
  // buat array untuk menampung list purchased (barang yg bisa dibeli)
  var listPurch = [];

  for (var i = 0; i < 5; i++) {
    if (uangSisa >= 1500000) {
      listPurch.push("Sepatu Stacattu");
      uangSisa -= 1500000;
    } else if (uangSisa >= 500000) {
      listPurch.push("Baju Zoro");
      uangSisa -= 500000;
    } else if (uangSisa >= 250000) {
      listPurch.push("Baju H&N");
      uangSisa -= 250000;
    } else if (uangSisa >= 175000) {
      listPurch.push("Sweater Uniklooh");
      uangSisa -= 175000;
    } else if (uangSisa >= 50000) {
      listPurch.push("CasingHandphone");
      uangSisa -= 50000;
      break; // kondisi dihentikan, karna hanya diperbolehkan masing2 membeli 1 item
    }
  }
  // console.log(listPurch);
  // console.log("Sisa Uang : " + uangSisa);

  // Membuat objek baru untuk menampung hasil
  var objProduct = {};
  // memasukan isi dari objek
  objProduct.memberId = memberId;
  objProduct.money = money;
  objProduct.listPurchased = listPurch;
  objProduct.changeMoney = uangSisa;
  // objProduct.

  if (memberId === "" || (memberId === undefined && money === undefined)) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }
  return objProduct;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
