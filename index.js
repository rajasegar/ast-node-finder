'use strict';

const query = require('./lib/query');

const {
  assignmentExpression,
  callExpressionQuery,
  memberExpressionQuery,
  literalQuery,
  newExpressionQuery,
  expressionStatementQuery,
  variableDeclaratorQuery,
  importDeclarationQuery,
  exportDefaultDeclarationQuery,
  identifier,
  functionDeclaration
} = query;

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
      str = exportDefaultDeclarationQuery(node);
      break;

    case 'ExpressionStatement':
      str = expressionStatementQuery(node);
      break;

    case 'NewExpression':
      str = newExpressionQuery(node);
      break;

    case 'ImportDeclaration':
      str = importDeclarationQuery(node);
      break;

    case 'Identifier':
      str = identifier(node);
      break;

    case 'FunctionDeclaration':
      str = functionDeclaration(node);
      break;

    case 'AssignmentExpression':
      str = assignmentExpression(node);
      break;

    default:
      console.log('findQuery => ', node.type);
      break;

  }

  return str;

}


function dispatchNodes(ast) {
  let str = '';
    str = ast.program && ast.program.body.map(node => {
      switch(node.type) {
        case 'ExpressionStatement':
          return findQuery(node.expression);

        case 'VariableDeclaration':
          return findQuery(node.declarations[0]);

        case 'ImportDeclaration':
          return findQuery(node);

        case 'ExportDefaultDeclaration':
          return findQuery(node);

        case 'FunctionDeclaration':
          return findQuery(node);

        default:
          console.log('dispatchNodes => ', node.type); // eslint-disable-line
          return '';
      }
    });


    return str;
 
}

module.exports = {
  findQuery,
  dispatchNodes,
  query
};

