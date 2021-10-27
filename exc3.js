arryOfNumber = [1, 2, 4, 5, 7, 9, 45, 354];
const numToFind = 45;
// v1
const ifBig = arryOfNumber.filter((num) => num > numToFind);

console.log(ifBig);

///v2
const ifBigV2 = arryOfNumber.filter(function (num) {
  return num > numToFind;
});
console.log(ifBigV2);
