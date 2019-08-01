class PairedTag {
  constructor(name, attributes, body, children) {
    this.name = name;
    this.attributes = attributes || {};
    this.body = body;
    this.children = children || [];
  }

  toString() {
    const attrsLine = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    const content = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.name}${attrsLine}>${content}</${this.name}>`;
  }
}
export default PairedTag;

// Teacher's solution
// export default class {
//   constructor(name, attributes = {}, body = '', children = []) {
//     this.name = name;
//     this.attributes = attributes;
//     this.body = body;
//     this.children = children;
//   }

//   toString() {
//     const value = this.children.length > 0 ? this.children.join('') : this.body;
//     return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
//   }

//   getAttributesAsLine() {
//     return Object.entries(this.attributes)
//       .map(([key, value]) => ` ${key}="${value}"`)
//       .join('');
//   }
// }