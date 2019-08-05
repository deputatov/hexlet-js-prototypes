import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function (name, attributes) {
  Node.call(this, name, attributes);
  this.toString = toString;
}
