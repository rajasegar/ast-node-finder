const { stripIndent } = require('common-tags');

function textNode(node, transform) {
  let str = '';
  str = stripIndent`
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
  str = stripIndent`
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
  let str =  '';
  str = stripIndent`
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
  let str =  '';
  str = stripIndent`
  return {
    MustacheStatement(node) {
      if(node.path.original === '${node.path.original}') {
        ${transform}
      }
    }
  };`;
  return str;
}

function dispatchNodes(ast, transform = 'return node;') {
  // Build the Glimmer template api
  let _body = ast && ast.body ? ast.body : [];
  let _ast = _body.map(node => {
    switch (node.type) {
      case "TextNode":
        return textNode(node, transform);

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

module.exports =  {
  dispatchNodes
};
