'use strict';

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
    str = ` callee: ${calleeQuery(node.callee)} `;

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

// Build the jscodeshift find query from nodes
function findQuery(node) {
  let str = '';
  switch(node.type) {
    case 'CallExpression':
      str = callExpressionQuery(node);       
      break;

    case 'MemberExpression':
      str = memberExpressionQuery(node);
      break;

    case 'Literal':
      str = literalQuery(node);
      break;

    case 'VariableDeclarator':
      str = variableDeclaratorQuery(node);
      break;

    case 'ExportDefaultDeclaration':
      str = exportDeclaration(node);
      break;

    default:
      console.log('findQuery => ', node.type);
      break;

  }

  return str;

}


function dispatchNodes(ast) {
  let str = '';
    str = ast.program.body.map(node => {
      switch(node.type) {
        case 'ExpressionStatement':
          return findQuery(node.expression);

        case 'VariableDeclaration':
          return findQuery(node.declarations[0]);

        default:
          console.log('pseudoAst => ', node.type); // eslint-disable-line
          return '';
      }
    });


    return str;
 
}

module.exports = {
  findQuery,
  dispatchNodes
};

