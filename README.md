# ast-node-finder
jscodeshift find api automatically generated from code

## Usage
```js
import { findQuery } from 'ast-node-finder';
import { parse } from 'recast';

const source = `foo.bar.baz(1,2,3)`;

const ast = parse(source);

// Pass the node from ast and get the find api
console.log(findQuery(ast.program.body[0].expression));
```

### Output

```js
root.find(j.CallExpression, {
  callee: {
    object: {   object: { name: 'foo' },
    property: { name: 'bar' }
  },
  property: { name: 'baz' }
  }
})
.forEach(path => {
  // Manipulate the path (node) here
});
```

## Currently supported nodes
- CallExpresssion
- MemberExpression

## More coming soon...
