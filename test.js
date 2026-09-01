const request = require('supertest');
const app = require('./app');
const test = require('node:test');
const assert = require('node:assert');

test('GET / debe retornar estado OK y mensaje correcto', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, 'OK');
});