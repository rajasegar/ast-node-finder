const assert = require('assert');
const fs = require('fs');
const { parse } = require('recast');
const { dispatchNodes } = require('../index.js');

describe('Core Finder api', function() {
  it('should a generate a callExpression query', function() {
    const fixturePath = 'test/fixtures/callExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join('\n');

    assert.strictEqual(query, output);
  });

  it('should a generate a literal query', function() {
    const fixturePath = 'test/fixtures/literal';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });

  it('should a generate a variable declarator query', function() {
    const fixturePath = 'test/fixtures/variableDeclarator';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });

  it('should a generate a new expression query', function() {
    const fixturePath = 'test/fixtures/newExpression';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });

  it('should a generate an import declaration query', function() {
    const fixturePath = 'test/fixtures/importDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });

  it('should a generate an export default declaration query', function() {
    const fixturePath = 'test/fixtures/exportDefaultDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });

  it('should a generate a function declaration query', function() {
    const fixturePath = 'test/fixtures/functionDeclaration';
    const inputFixture = `${fixturePath}.input.js`;
    const outputFixture = `${fixturePath}.output.js`;
    const input = fs.readFileSync(inputFixture, 'utf-8');
    const output = fs.readFileSync(outputFixture, 'utf-8');
    let ast = parse(input);

    let query =  dispatchNodes(ast).join();

    assert.strictEqual(query, output);
  });
});
