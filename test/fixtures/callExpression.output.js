root.find(j.CallExpression, {
  callee: { name: 'hello' }
})
root.find(j.CallExpression, {
  callee: {
    object: { name: 'foo' },
    property: { name: 'bar' }
  }
})
root.find(j.CallExpression, {
  callee: {
    object: { callee: {
    object: { type: "ThisExpression" },
    property: { name: 'get' }
  } },
    property: { name: 'pushPayload' }
  }
})