return {
  ElementNode(node) {
    node.tag = node.tag.split("").reverse().join("");
  }
};