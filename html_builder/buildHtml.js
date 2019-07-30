const iterAst = (ast) => {
  let attrsLine;
  switch (ast.type) {
    case 'tagsList':
      return `${ast.body.map(iterAst).join('')}`;
    case 'tag':
      attrsLine = Object.entries(ast.options).reduce((acc, [key, value]) => `${acc} ${key}="${value}"`, '');
      return `<${ast.name}${attrsLine}>${iterAst(ast.body)}</${ast.name}>`;
    case 'onlyTag':
      return `<${ast.name}></${ast.name}>`;
    default:
      return ast;
  }
};

const iter = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(iter) };
  }
  let body;
  let options;
  if (data.length === 3) {
    [body, options] = [data[2], data[1]];
  } else if (data.length === 2) {
    if (data[1] instanceof Array || typeof (data[1]) === 'string') {
      [body, options] = [data[1], {}];
    } else {
      [body, options] = ['', data[1]];
    }
  } else if (data.length === 1) {
    return { type: 'onlyTag', name: data[0] };
  }
  const processedBody = body instanceof Array ? iter(body) : body;
  return {
    type: 'tag', name: data[0], body: processedBody, options,
  };
};

export default (data) => {
  const ast = iter(data);
  return iterAst(ast);
};