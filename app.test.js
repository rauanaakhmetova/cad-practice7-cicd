const test = require('node:test');
const assert = require('node:assert');
const { handler } = require('./app');

function call(url) {
  return new Promise((resolve) => {
    const res = { code: 0, body: '', writeHead(c) { this.code = c; }, end(b) { this.body = b; resolve(this); } };
    handler({ url }, res);
  });
}

test('health returns ok', async () => {
  const r = await call('/health');
  assert.strictEqual(r.code, 200);
  assert.strictEqual(r.body, 'ok');
});

test('root returns service name', async () => {
  const r = await call('/');
  assert.strictEqual(JSON.parse(r.body).service, 'p7-app');
});
