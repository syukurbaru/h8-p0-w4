function checkAB(num) {
  // you can only write your code here!

  var arr = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] !== " ") {
      arr.push(num[i]);
    }
  }
  // console.log(arr);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === "a") {
      for (var k = j; k <= j + 3; k++) {
        if (arr[k] === "b") {
          return true;
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
