# ast-node-finder
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Frajasegar%2Fast-node-finder%2Fbadge&style=flat&label=build)](https://actions-badge.atrox.dev/rajasegar/ast-node-finder/goto)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ast-node-finder/badge.svg?branch=refs/heads/master)](https://coveralls.io/github/rajasegar/ast-node-finder?branch=refs/heads/master)
[![Version](https://img.shields.io/npm/v/ast-node-finder.svg)](https://npmjs.org/package/ast-node-finder)

[jscodeshift](https://github.com/facebook/jscodeshift) find api automatically generated from code

Checkout the api in this [playground](https://rajasegar.github.io/ast-finder/)

Read the [introductory blog post](http://hangaroundtheweb.com/2019/12/ast-finder-finding-ast-nodes-from-code/) for more details.

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

