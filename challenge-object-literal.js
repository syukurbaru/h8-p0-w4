function changeMe(arr) {
  // var resultObj = {};
  for (var j = 0; j < arr.length; j++) {
    console.log(j + 1 + ". " + arr[j][0] + " " + arr[j][1]);
    // Buar variabel yang berisi objek untuk menampung data baru
    var arrObj = {};
    // masukan value kedalam key
    arrObj.firstName = arr[j][0];
    arrObj.lastName = arr[j][1];
    arrObj.gender = arr[j][2];
    if (arr[j][3] === undefined) {
      arrObj.age = "Invalid Birth Year";
    } else {
      arrObj.age = 2019 - arr[j][3];
    }
    console.log(arrObj);
  }

  if (arr.length === 0) {
    console.log('""');
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"]
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
