const assert = require('assert');
const fs = require('fs');
const globby  = require('globby');
const path = require('path');
const { parse } = require('recast');
const { dispatchNodes } = require('../index.js');

describe('Core Finder api', function() {
  let fixtureDir = 'test/fixtures/core';
  globby
    .sync('**/*.input.*', {
      cwd: fixtureDir,
    })
    .forEach(filename => {
      let extension = path.extname(filename);
      let testName = filename.replace(`.input${extension}`, '');
      let inputFixture = path.join(fixtureDir, `${testName}.input${extension}`);
      let outputFixture = path.join(fixtureDir, `${testName}.output${extension}`);
      it(testName, function() {

        const input = fs.readFileSync(inputFixture, 'utf-8');
        const output = fs.readFileSync(outputFixture, 'utf-8');
        let ast = parse(input);

        let query =  dispatchNodes(ast).join('\n');

        assert.strictEqual(query, output);
      });

    });

});
