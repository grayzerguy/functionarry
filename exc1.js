const arry = [
  { width: 10, height: 20 },
  { width: 20, height: 10 },
  { width: 5, height: 5 },
];
const newArry = arry.map((arry) => {
  return {
    width: arry.width,
    height: arry.height,
    size: arry.width * arry.height,
  };
});
console.log(newArry);

const newArry1 = arry.map(function (x) {
  return {
    width: x.width,
    height: x.height,
    size: arry.width * arry.height,
  };
});
console.log(newArry1);
