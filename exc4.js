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

const isbigger = rectangle.filter((item) => item.size > 100);
console.log(isbigger);

const isbiggerV2 = rectangle.filter(function (item) {
  return item.size > 100;
});
console.log(isbiggerV2);
