const test = require('node:test');
const assert = require('node:assert');

test('Verificar operacion matematica basica para CI', async () => {
    assert.strictEqual(1 + 1, 2);
});