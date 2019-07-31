const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string'
  },
  {
    name: 'children',
    check: arg => arg instanceof Array
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object
  }
];

const getPropertyAction = arg =>
  propertyActions.find(({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs)
    .map(key => ` ${key}="${attrs[key]}"`)
    .join('');

export const parse = data => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: []
  };
  const newRoot = rest.reduce((acc, arg) => {
    const { name } = getPropertyAction(arg);
    return { ...acc, [name]: arg };
  }, root);
  return { ...newRoot, children: newRoot.children.map(parse) };
};

export const render = ast => [`<${ast.name}${buildAttrString(ast.attributes)}>`,
  `${ast.body}${ast.children.map(render).join('')}`,
  singleTagsList.has(ast.name) ? '' : `</${ast.name}>`].join('');
