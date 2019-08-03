const magic = (...args) => {
  const sum = args.reduce((a, b) => a + b, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38);