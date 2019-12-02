// Build object query
function objectQuery(node) {
  let str = '';
  switch(node.type) {
    case 'Identifier':
      str = ` object: { name: '${node.name}' } `;
      break;

    case 'CallExpression':
      str = ` object: { ${calleeQuery(node.callee)} }, `;
      break;

    case 'MemberExpression':
      str = ` object: {  ${objectQuery(node.object)} ,
        property: { name: '${node.property.name}' }
        } `;
      break;

    default:
      console.log('objectQuery::object => ', node.type);
      break;
  }

  return str;
}

// Build callee query
function calleeQuery(node) {
  let str = '';
  if(node.type === 'MemberExpression') {
    let { object, property } = node;
    let obj = '';
    let prop = '';

    obj = objectQuery(object);
    switch(property.type) {
      case 'Identifier':
        prop = `property: { name: '${property.name}' }`;
        break;

      default:
        console.log('calleeQuery::property => ', property.type);
        break;
    }

    str =  `callee: {
    ${obj},
    ${prop}
  }`;

  } else if (node.type === 'CallExpression') {
    str = ` ${calleeQuery(node.callee)} `;

  } else if (node.type === 'Identifier') {

    str = ` callee: { name: '${node.name}' } `;
  }
  else {

    console.error('Unknown node type in calleeQuery');
  }

  return str;

}

// Build memberExpression query
function memberExpressionQuery(node) {
  let str = '';

    let { object, property } = node;
    let obj = '';
    let prop = '';

    obj = objectQuery(object);

    switch(property.type) {
      case 'Identifier':
        prop = `property: { name: '${property.name}' }`;
        break;

      default:
        console.log('buildMemberExpressionQuery::property => ', property.type);
        break;
    }

    str =  `root.find(j.MemberExpression, {
    ${obj},
    ${prop}
    })`;

  return str;
}

// Build callExpression query
function callExpressionQuery(node) {
  let str = '';
  str = `root.find(j.CallExpression, {
      ${calleeQuery(node.callee)} 
      })`;
  return str;
}

function literalQuery(node) {
  let value = typeof node.value === 'string' ? `'${node.value}'` : node.value;
  return `root.find(j.Literal, { value: ${value} })`;
}

function variableDeclaratorQuery(node) {
  return `root.find(j.VariableDeclarator, {
  id: { name: '${node.id.name}' }
  });`;
}

function expressionStatementQuery(node) {
  let { expression } = node;
  let str = '';
  switch(expression.type) {
    case 'CallExpression':
      str = `root.find(j.ExpressionStatement, {
      expression: {
      ${calleeQuery(expression)}
      }
      })`;
      break;

    case 'MemberExpression':
      str = `root.find(j.ExpressionStatement, {
      expression: {
      ${calleeQuery(expression)}
      }
      })`;
      break;
  }

  return str;
}

// New Expression Query
function newExpressionQuery(node) {
  let str = '';
  str =   `root.find(j.NewExpression, {
  callee: { name: '${node.callee.name}' }
})`;
  return str;
}

// Import Declaration query
function importDeclarationQuery(node) {
  let str = '';
  str = `root.find(j.ImportDeclaration, {
  source: ${node.source.raw}
})`;
  return str;
}

function exportDefaultDeclarationQuery(node) {
  let str = '';
  switch(node.declaration.type) {

    case 'CallExpression':
  str =   `root.find(j.ExportDefaultDeclaration, {
  declaration: { ${calleeQuery(node.declaration.callee)} }
  })`;
      break;

    default:
      console.log('exportDefaultDeclaration => ', node.declaration.type);
  }

  return str;
}

module.exports = {
  callExpressionQuery,
  literalQuery,
  memberExpressionQuery,
  newExpressionQuery,
  expressionStatementQuery,
  variableDeclaratorQuery,
  importDeclarationQuery,
  exportDefaultDeclarationQuery
};
