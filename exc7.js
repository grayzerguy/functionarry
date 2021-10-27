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
  {
    width: 100,
    height: 10,
    size: 1000,
  },
];

const b = rectangle.sort((a, b) => {
  a.size - b.size;
});
console.log(b);
