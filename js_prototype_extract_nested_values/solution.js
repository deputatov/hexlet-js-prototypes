Object.prototype.hash = function hash(arg) {
  return arg.split('.').reduce((obj, key) => (obj === undefined ? obj : obj[key]), this);
};