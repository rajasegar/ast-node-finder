'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripIndents = exports.stripIndent = exports.oneLineInlineLists = exports.inlineLists = exports.oneLineCommaListsAnd = exports.oneLineCommaListsOr = exports.oneLineCommaLists = exports.oneLineTrim = exports.oneLine = exports.safeHtml = exports.source = exports.codeBlock = exports.html = exports.commaListsOr = exports.commaListsAnd = exports.commaLists = exports.removeNonPrintingValuesTransformer = exports.splitStringTransformer = exports.inlineArrayTransformer = exports.replaceStringTransformer = exports.replaceSubstitutionTransformer = exports.replaceResultTransformer = exports.stripIndentTransformer = exports.trimResultTransformer = exports.TemplateTag = undefined;

var _TemplateTag2 = require('./TemplateTag');

var _TemplateTag3 = _interopRequireDefault(_TemplateTag2);

var _trimResultTransformer2 = require('./trimResultTransformer');

var _trimResultTransformer3 = _interopRequireDefault(_trimResultTransformer2);

var _stripIndentTransformer2 = require('./stripIndentTransformer');

var _stripIndentTransformer3 = _interopRequireDefault(_stripIndentTransformer2);

var _replaceResultTransformer2 = require('./replaceResultTransformer');

var _replaceResultTransformer3 = _interopRequireDefault(_replaceResultTransformer2);

var _replaceSubstitutionTransformer2 = require('./replaceSubstitutionTransformer');

var _replaceSubstitutionTransformer3 = _interopRequireDefault(_replaceSubstitutionTransformer2);

var _replaceStringTransformer2 = require('./replaceStringTransformer');

var _replaceStringTransformer3 = _interopRequireDefault(_replaceStringTransformer2);

var _inlineArrayTransformer2 = require('./inlineArrayTransformer');

var _inlineArrayTransformer3 = _interopRequireDefault(_inlineArrayTransformer2);

var _splitStringTransformer2 = require('./splitStringTransformer');

var _splitStringTransformer3 = _interopRequireDefault(_splitStringTransformer2);

var _removeNonPrintingValuesTransformer2 = require('./removeNonPrintingValuesTransformer');

var _removeNonPrintingValuesTransformer3 = _interopRequireDefault(_removeNonPrintingValuesTransformer2);

var _commaLists2 = require('./commaLists');

var _commaLists3 = _interopRequireDefault(_commaLists2);

var _commaListsAnd2 = require('./commaListsAnd');

var _commaListsAnd3 = _interopRequireDefault(_commaListsAnd2);

var _commaListsOr2 = require('./commaListsOr');

var _commaListsOr3 = _interopRequireDefault(_commaListsOr2);

var _html2 = require('./html');

var _html3 = _interopRequireDefault(_html2);

var _codeBlock2 = require('./codeBlock');

var _codeBlock3 = _interopRequireDefault(_codeBlock2);

var _source2 = require('./source');

var _source3 = _interopRequireDefault(_source2);

var _safeHtml2 = require('./safeHtml');

var _safeHtml3 = _interopRequireDefault(_safeHtml2);

var _oneLine2 = require('./oneLine');

var _oneLine3 = _interopRequireDefault(_oneLine2);

var _oneLineTrim2 = require('./oneLineTrim');

var _oneLineTrim3 = _interopRequireDefault(_oneLineTrim2);

var _oneLineCommaLists2 = require('./oneLineCommaLists');

var _oneLineCommaLists3 = _interopRequireDefault(_oneLineCommaLists2);

var _oneLineCommaListsOr2 = require('./oneLineCommaListsOr');

var _oneLineCommaListsOr3 = _interopRequireDefault(_oneLineCommaListsOr2);

var _oneLineCommaListsAnd2 = require('./oneLineCommaListsAnd');

var _oneLineCommaListsAnd3 = _interopRequireDefault(_oneLineCommaListsAnd2);

var _inlineLists2 = require('./inlineLists');

var _inlineLists3 = _interopRequireDefault(_inlineLists2);

var _oneLineInlineLists2 = require('./oneLineInlineLists');

var _oneLineInlineLists3 = _interopRequireDefault(_oneLineInlineLists2);

var _stripIndent2 = require('./stripIndent');

var _stripIndent3 = _interopRequireDefault(_stripIndent2);

var _stripIndents2 = require('./stripIndents');

var _stripIndents3 = _interopRequireDefault(_stripIndents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TemplateTag = _TemplateTag3.default;

// transformers
// core

exports.trimResultTransformer = _trimResultTransformer3.default;
exports.stripIndentTransformer = _stripIndentTransformer3.default;
exports.replaceResultTransformer = _replaceResultTransformer3.default;
exports.replaceSubstitutionTransformer = _replaceSubstitutionTransformer3.default;
exports.replaceStringTransformer = _replaceStringTransformer3.default;
exports.inlineArrayTransformer = _inlineArrayTransformer3.default;
exports.splitStringTransformer = _splitStringTransformer3.default;
exports.removeNonPrintingValuesTransformer = _removeNonPrintingValuesTransformer3.default;

// tags

exports.commaLists = _commaLists3.default;
exports.commaListsAnd = _commaListsAnd3.default;
exports.commaListsOr = _commaListsOr3.default;
exports.html = _html3.default;
exports.codeBlock = _codeBlock3.default;
exports.source = _source3.default;
exports.safeHtml = _safeHtml3.default;
exports.oneLine = _oneLine3.default;
exports.oneLineTrim = _oneLineTrim3.default;
exports.oneLineCommaLists = _oneLineCommaLists3.default;
exports.oneLineCommaListsOr = _oneLineCommaListsOr3.default;
exports.oneLineCommaListsAnd = _oneLineCommaListsAnd3.default;
exports.inlineLists = _inlineLists3.default;
exports.oneLineInlineLists = _oneLineInlineLists3.default;
exports.stripIndent = _stripIndent3.default;
exports.stripIndents = _stripIndents3.default;

var commonTags = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const { stripIndent: stripIndent$2 } = commonTags;
// Build object query
function objectQuery$1(node) {
    let str = '';
    switch (node.type) {
        case 'Identifier':
            str = `object: { name: '${node.name}' }`;
            break;
        case 'CallExpression':
            str = `object: { ${calleeQuery(node.callee)} }`;
            break;
        case 'MemberExpression':
            str = stripIndent$2 `
      object: { ${objectQuery$1(node.object)} ,
        property: { name: '${node.property.name}' }
      }`;
            break;
        case 'ThisExpression':
            str = `object: { type: "ThisExpression" }`;
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
    if (node.type === 'MemberExpression') {
        let { object, property } = node;
        let obj = '';
        let prop = '';
        obj = objectQuery$1(object);
        switch (property.type) {
            case 'Identifier':
                prop = `property: { name: '${property.name}' }`;
                break;
            default:
                console.log('calleeQuery::property => ', property.type);
                break;
        }
        str = stripIndent$2 `callee: {
      ${obj},
      ${prop}
    }`;
        //} else if (node.type === 'CallExpression') {
        //str = ` ${calleeQuery(node.callee)} `;
    }
    else if (node.type === 'Identifier') {
        str = `callee: { name: '${node.name}' }`;
    }
    else {
        console.error('Unknown node type in calleeQuery');
    }
    return str;
}
// Build memberExpression query
function memberExpressionQuery$1(node) {
    let str = '';
    let { object, property } = node;
    let obj = '';
    let prop = '';
    obj = objectQuery$1(object);
    switch (property.type) {
        case 'Identifier':
            prop = `property: { name: '${property.name}' }`;
            break;
        default:
            console.log('buildMemberExpressionQuery::property => ', property.type);
            break;
    }
    str = `root.find(j.MemberExpression, {
    ${obj},
    ${prop}
    })`;
    return str;
}
// Build callExpression query
function callExpressionQuery$1(node) {
    let str = '';
    const { arguments: args } = node;
    // Deliberately filtering out other argument nodes here
    let filteredArgs = args.filter((a) => ['Literal', 'Identifier'].includes(a.type));
    let _filter = filteredArgs.map((a, i) => {
        let temp = '';
        switch (a.type) {
            case 'Literal':
                temp = `path.value.arguments[${i}].raw === '${a.raw.replace(/'/g, '')}'`;
                break;
            case 'Identifier':
                temp = `path.value.arguments[${i}].name === '${a.name}'`;
                break;
            default:
                console.log('callExpressionQuery::filter => ', a.type);
                break;
        }
        return temp;
    }).join('\n  && ');
    if (filteredArgs.length > 0) {
        str = stripIndent$2 `
  root.find(j.CallExpression, {
    ${calleeQuery(node.callee)}
  })
  .filter(path => {
    return ${_filter}
  })`;
    }
    else {
        str = stripIndent$2 `
  root.find(j.CallExpression, {
    ${calleeQuery(node.callee)}
  })`;
    }
    return str;
}
function literalQuery$1(node) {
    let value = typeof node.value === 'string' ? `'${node.value}'` : node.value;
    return `root.find(j.Literal, { value: ${value} })`;
}
function variableDeclaratorQuery$1(node) {
    return `root.find(j.VariableDeclarator, {
  id: { name: '${node.id.name}' }
  });`;
}
function expressionStatementQuery$1(node) {
    let { expression } = node;
    let str = '';
    switch (expression.type) {
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
function newExpressionQuery$1(node) {
    let str = '';
    str = `root.find(j.NewExpression, {
  callee: { name: '${node.callee.name}' }
})`;
    return str;
}
// Import Declaration query
function importDeclarationQuery$1(node) {
    let str = '';
    str = `root.find(j.ImportDeclaration, {
  source: ${node.source.raw}
})`;
    return str;
}
function exportDefaultDeclarationQuery$1(node) {
    let str = '';
    switch (node.declaration.type) {
        case 'CallExpression':
            str = `root.find(j.ExportDefaultDeclaration, {
  declaration: { ${calleeQuery(node.declaration.callee)} }
  })`;
            break;
        default:
            console.log('exportDefaultDeclaration => ', node.declaration.type);
    }
    return str;
}
function identifier$2(node) {
    let str = '';
    str = `root.find(j.Identifier, {
  name: '${node.name}'
  })`;
    return str;
}
function functionDeclaration$2(node) {
    let str = '';
    str = `root.find(j.FunctionDeclaration, {
  id: { name: '${node.id.name}' }
  })`;
    return str;
}
function assignmentExpression$2(node) {
    let { operator, left, right } = node;
    let str = '';
    let val = '';
    let _right = '';
    switch (right.type) {
        case 'Literal':
            val = typeof right.value === 'string' ? `'${right.value}'` : right.value;
            _right = `right: { value: ${val} }`;
            break;
        case 'Identifier':
            _right = `right: { name: '${right.name}' }`;
            break;
        case 'MemberExpression':
            _right = stripIndent$2 `
      right: {
        ${objectQuery$1(right.object)},
        property: { name: '${right.property.name}' }
      }`;
            break;
        default:
            console.log('assignmentExpression => ', right.type);
            break;
    }
    str = stripIndent$2 `
  root.find(j.AssignmentExpression, {
    operator: '${operator}',
    left: { name: '${left.name}' },
    ${_right}
  })
  `;
    return str;
}

var query = /*#__PURE__*/Object.freeze({
  __proto__: null,
  assignmentExpression: assignmentExpression$2,
  callExpressionQuery: callExpressionQuery$1,
  literalQuery: literalQuery$1,
  memberExpressionQuery: memberExpressionQuery$1,
  newExpressionQuery: newExpressionQuery$1,
  expressionStatementQuery: expressionStatementQuery$1,
  variableDeclaratorQuery: variableDeclaratorQuery$1,
  importDeclarationQuery: importDeclarationQuery$1,
  exportDefaultDeclarationQuery: exportDefaultDeclarationQuery$1,
  identifier: identifier$2,
  functionDeclaration: functionDeclaration$2
});

const { stripIndent: stripIndent$1 } = commonTags;
// Build object query
function objectQuery(node) {
    let str = '';
    switch (node.type) {
        case 'Identifier':
            str = `object: { name: '${node.name}' }`;
            break;
        case 'CallExpression':
            str = `object: { ${callee(node.callee)} }`;
            break;
        case 'MemberExpression':
            str = stripIndent$1 `
      object: { ${objectQuery(node.object)} ,
        property: { name: '${node.property.name}' }
      }`;
            break;
        case 'ThisExpression':
            str = `object: { type: "ThisExpression" }`;
            break;
        default:
            console.log('objectQuery::object => ', node.type);
            break;
    }
    return str;
}
// Build callee query
function callee(node) {
    let str = '';
    if (node.type === 'MemberExpression') {
        let { object, property } = node;
        let obj = '';
        let prop = '';
        obj = objectQuery(object);
        switch (property.type) {
            case 'Identifier':
                prop = `property: { name: '${property.name}' }`;
                break;
            default:
                console.log('calleeQuery::property => ', property.type);
                break;
        }
        str = stripIndent$1 `callee: {
      ${obj},
      ${prop}
    }`;
        //} else if (node.type === 'CallExpression') {
        //str = ` ${calleeQuery(node.callee)} `;
    }
    else if (node.type === 'Identifier') {
        str = `callee: { name: '${node.name}' }`;
    }
    else {
        console.error('Unknown node type in calleeQuery');
    }
    return str;
}
// Build memberExpression query
function memberExpression(node) {
    let str = '';
    let { object, property } = node;
    let obj = '';
    let prop = '';
    obj = objectQuery(object);
    switch (property.type) {
        case 'Identifier':
            prop = `property: { name: '${property.name}' }`;
            break;
        default:
            console.log('buildMemberExpressionQuery::property => ', property.type);
            break;
    }
    str = `root.find(j.MemberExpression, {
    ${obj},
    ${prop}
    })`;
    return str;
}
// Build callExpression query
function callExpression(node) {
    let str = '';
    const { arguments: args } = node;
    // Deliberately filtering out other argument nodes here
    let filteredArgs = args.filter((a) => ['Identifier'].includes(a.type));
    let _filter = filteredArgs.map((a, i) => {
        let temp = '';
        switch (a.type) {
            case 'Literal':
                temp = `path.value.arguments[${i}].raw === '${a.raw.replace(/'/g, '')}'`;
                break;
            case 'Identifier':
                temp = `path.value.arguments[${i}].name === '${a.name}'`;
                break;
            default:
                console.log('callExpressionQuery::filter => ', a.type);
                break;
        }
        return temp;
    }).join('\n  && ');
    if (filteredArgs.length > 0) {
        str = stripIndent$1 `
  root.find(j.CallExpression, {
    ${callee(node.callee)}
  })
  .filter(path => {
    return ${_filter}
  })`;
    }
    else {
        str = stripIndent$1 `
  root.find(j.CallExpression, {
    ${callee(node.callee)}
  })`;
    }
    return str;
}
function variableDeclarator(node) {
    return `root.find(j.VariableDeclarator, {
  id: { name: '${node.id.name}' }
  })`;
}
function expressionStatement(node) {
    let { expression } = node;
    let str = '';
    switch (expression.type) {
        case 'CallExpression':
            str = `root.find(j.ExpressionStatement, {
      expression: {
      ${callee(expression)}
      }
      })`;
            break;
        case 'MemberExpression':
            str = `root.find(j.ExpressionStatement, {
      expression: {
      ${callee(expression)}
      }
      })`;
            break;
    }
    return str;
}
// New Expression Query
function newExpression(node) {
    let str = '';
    str = `root.find(j.NewExpression, {
  callee: { name: '${node.callee.name}' }
})`;
    return str;
}
// Import Declaration query
function importDeclaration(node) {
    let str = '';
    str = `root.find(j.ImportDeclaration, {
  source: { value: '${node.source.value}' }
})`;
    return str;
}
function exportDefaultDeclaration(node) {
    let str = '';
    switch (node.declaration.type) {
        case 'CallExpression':
            str = `root.find(j.ExportDefaultDeclaration, {
  declaration: { ${callee(node.declaration.callee)} }
  })`;
            break;
        case 'ClassDeclaration':
            str = `root.find(j.ExportDefaultDeclaration, {
        declaration: {
          type: 'ClassDeclaration'
        }
      })`;
            break;
        default:
            console.log('exportDefaultDeclaration => ', node.declaration.type);
    }
    return str;
}
function identifier$1(node) {
    let str = '';
    str = `root.find(j.Identifier, {
  name: '${node.name}'
  })`;
    return str;
}
function functionDeclaration$1(node) {
    let str = '';
    str = `root.find(j.FunctionDeclaration, {
  id: { name: '${node.id.name}' }
  })`;
    return str;
}
function assignmentExpression$1(node) {
    let { operator, left, right } = node;
    let str = '';
    let val = '';
    let _right = '';
    switch (right.type) {
        case 'StringLiteral':
            val = `'${right.value}'`;
            _right = `right: { value: ${val} }`;
            break;
        case 'NumericLiteral':
            val = right.value;
            _right = `right: { value: ${val} }`;
            break;
        case 'BooleanLiteral':
            val = right.value;
            _right = `right: { value: ${val} }`;
            break;
        case 'Identifier':
            _right = `right: { name: '${right.name}' }`;
            break;
        case 'MemberExpression':
            _right = stripIndent$1 `
      right: {
        ${objectQuery(right.object)},
        property: { name: '${right.property.name}' }
      }`;
            break;
        default:
            console.log('assignmentExpression => ', right.type);
            break;
    }
    str = stripIndent$1 `
  root.find(j.AssignmentExpression, {
    operator: '${operator}',
    left: { name: '${left.name}' },
    ${_right}
  })
  `;
    return str;
}
function expressionQuery(node) {
    let str = '';
    switch (node.type) {
        case 'CallExpression':
            str = callExpression(node);
            break;
        case 'AssignmentExpression':
            str = assignmentExpression$1(node);
            break;
        case 'Identifier':
            str = identifier$1(node);
            break;
        case 'MemberExpression':
            str = memberExpression(node);
            break;
        case 'NewExpression':
            str = newExpression(node);
            break;
        default:
            console.log('expressionQuery => ', node.type);
            break;
    }
    return str;
}
function dispatchNodes$2(ast, wrapExpression = false) {
    let str = '';
    str = ast.program && ast.program.body.map((node) => {
        switch (node.type) {
            case 'ExpressionStatement':
                return wrapExpression ? expressionStatement(node.expression) : expressionQuery(node.expression);
            case 'VariableDeclaration':
                return variableDeclarator(node.declarations[0]);
            case 'ImportDeclaration':
                return importDeclaration(node);
            case 'ExportDefaultDeclaration':
                return exportDefaultDeclaration(node);
            case 'FunctionDeclaration':
                return functionDeclaration$1(node);
            default:
                console.log('Babel::dispatchNodes => ', node.type); // eslint-disable-line
                return '';
        }
    });
    return str;
}

var babel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  dispatchNodes: dispatchNodes$2
});

const { stripIndent } = commonTags;
function textNode(transform) {
    let str = '';
    str = stripIndent `
  return {
    TextNode(node) {
      ${transform}
    }
  };`;
    return str;
}
function elementNode(node, transform) {
    let str = '';
    transform = transform || `node.tag = node.tag.split("").reverse().join("");`;
    str = stripIndent `
  return {
    ElementNode(node) {
      if(node.tag === '${node.tag}') {
        ${transform}
      }
    }
  };`;
    return str;
}
function blockStatement(node, transform) {
    let str = '';
    str = stripIndent `
  return {
    BlockStatement(node) {
      if(node.path.original === '${node.path.original}') {
        ${transform}
      }
    }
  };`;
    return str;
}
function mustacheStatement(node, transform) {
    let str = '';
    str = stripIndent `
  return {
    MustacheStatement(node) {
      if(node.path.original === '${node.path.original}') {
        ${transform}
      }
    }
  };`;
    return str;
}
function dispatchNodes$1(ast, transform = 'return node;') {
    // Build the Glimmer template api
    let _body = ast && ast.body ? ast.body : [];
    let _ast = _body.map((node) => {
        switch (node.type) {
            case "TextNode":
                return textNode(transform);
            case "ElementNode":
                return elementNode(node, transform);
            case "BlockStatement":
                return blockStatement(node, transform);
            case 'MustacheStatement':
                return mustacheStatement(node, transform);
            default:
                console.log("dispatchNodes => ", node.type); // eslint-disable-line
        }
    });
    return _ast;
}
module.exports = {
    dispatchNodes: dispatchNodes$1
};

var glimmer = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const { assignmentExpression, callExpressionQuery, memberExpressionQuery, literalQuery, newExpressionQuery, expressionStatementQuery, variableDeclaratorQuery, importDeclarationQuery, exportDefaultDeclarationQuery, identifier, functionDeclaration } = query;
// Build the jscodeshift find query from nodes
function findQuery(node) {
    let str = '';
    switch (node.type) {
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
    str = ast.program && ast.program.body.map((node) => {
        switch (node.type) {
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

exports.babel = babel;
exports.dispatchNodes = dispatchNodes;
exports.findQuery = findQuery;
exports.glimmer = glimmer;
exports.query = query;
