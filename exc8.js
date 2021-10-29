const arry = [23, 45, 23, 56, 23, 89, 23, 10, 23];
const numTofindIndex = 23;

function findIndex(arry, numTofindIndex) {
  let result = [];
  for (let i in arry) {
    if (arry[i] === numTofindIndex) {
      result.push(i);
    }
  }
  return result;
}

console.log(findIndex(arry, numTofindIndex));
