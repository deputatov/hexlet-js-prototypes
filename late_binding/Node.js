function getAttributesAsLine() {
  return Object.entries(this.attributes)
    .reduce((acc, [key, value]) => `${acc} ${key}="${value}"`, '');
}

export default function (name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributesAsLine = getAttributesAsLine;
}
