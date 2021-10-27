const rectangle = [
  {
    width: 10,
    height: 5,
    size: 50,
  },
  {
    width: 20,
    height: 10,
    size: 200,
  },
];
const areaForTesting1 = 50;
const isTheSameSize = rectangle.every((rectangle) => {
  rectangle.size === areaForTesting1;
});
console.log(isTheSameSize);

const isTheSameSizeV2 = rectangle.every(function (size) {
  return size.size === size.size;
});
