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

    default:
      console.log('findQuery => ', node.type);
      break;

  }

  return str;

}

module.exports = {
  findQuery
};

