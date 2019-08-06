import Node from './Node';

function SingleTag(name, attributes) {
  Node.call(this, name, attributes);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

export default SingleTag;