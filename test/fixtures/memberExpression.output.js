root.find(j.CallExpression, {
      callee: {
     object: { name: 'foo' } ,
    property: { name: 'bar' }
  } 
      })