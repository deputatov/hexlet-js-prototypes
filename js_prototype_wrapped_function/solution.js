Function.prototype.wrap = function wrap(f) {
  return (arg1, arg2) => f(this, arg1, arg2);
};