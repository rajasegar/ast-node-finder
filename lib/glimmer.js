const { stripIndent } = require('common-tags');

function textNode(node) {
  let str = '';
  str = stripIndent`
  return {
    TextNode(node) {
    }
  };`;
  return str;
}

function elementNode(node) {
  let str = '';
  str = stripIndent`
  return {
    ElementNode(node) {
      node.tag = node.tag.split("").reverse().join("");
    }
  };`;
  return str;
}

function blockStatement(node) {
  let str =  '';
  str = stripIndent`
  return {
    BlockStatement(node) {
    }
  };`;
  return str;
}

function mustacheStatement(node) {
  let str =  '';
  str = stripIndent`
  return {
    MustacheStatement(node) {
    }
  };`;
  return str;
}

function dispatchNodes(ast) {
  // Build the Glimmer template api
  let _body = ast && ast.body ? ast.body : [];
  let _ast = _body.map(node => {
    switch (node.type) {
      case "TextNode":
        return textNode(node);

      case "ElementNode":
        return elementNode(node);

      case "BlockStatement":
        return blockStatement(node);

      case 'MustacheStatement':
        return mustacheStatement(node);

      default:
        console.log("dispatchNodes => ", node.type); // eslint-disable-line
    }
  });

  return _ast;
}

module.exports =  {
  dispatchNodes
};
