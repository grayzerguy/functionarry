arry = [
  { width: 10, height: 20 },
  { width: 20, height: 10 },
  { width: 5, height: 5 },
];
const newArryOnlyNumber = arry.map(function (item) {
  return item.width * item.height;
});
console.log(newArryOnlyNumber);

const newArryOnlyNumberV2 = arry.map((guy) => {
  return guy.width * guy.height;
});
console.log(newArryOnlyNumberV2);
