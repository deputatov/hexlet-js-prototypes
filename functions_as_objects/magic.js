const magic = (...args) => {
  const sum = args.reduce((a, b) => a + b, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

export default magic;