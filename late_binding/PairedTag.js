import Node from './Node';

function toString() {
  const value = this.children.length > 0
    ? this.children.join('')
    : this.body;

  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function (name, attributes, body = '', children = []) {
  Node.call(this, name, attributes);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
