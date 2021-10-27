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
const areaForTesting = 50;
const isSizeIsEqual = rectangle.find(
  (element) => element.size === areaForTesting
);
console.log(isSizeIsEqual);
