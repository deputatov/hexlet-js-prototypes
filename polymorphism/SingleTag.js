class SingleTag {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes || {};
  }

  toString() {
    const attrsLine = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    return `<${this.name}${attrsLine}>`;
  }
}
export default SingleTag;

// Teacher's solutiuon
// export default class {
//   constructor(name, attributes = {}) {
//     this.name = name;
//     this.attributes = attributes;
//   }

//   toString() {
//     return `<${this.name}${this.getAttributesAsLine()}>`;
//   }

//   getAttributesAsLine() {
//     return Object.entries(this.attributes)
//       .map(([key, value]) => ` ${key}="${value}"`)
//       .join('');
//   }
// }