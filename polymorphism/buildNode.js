const singleTagsList = new Set(['hr', 'img', 'br']);

export default (name, attributes, body, children) => (singleTagsList.has(name)
  ? new SingleTag(name, attributes)
  : new PairedTag(name, attributes, body, children));

// Teacher's solution
// const singleTagsList = new Set(['hr', 'br', 'img']);
// export default (name, ...args) => {
//   const C = singleTagsList.has(name) ? SingleTag : PairedTag;
//   return new C(name, ...args);
// };