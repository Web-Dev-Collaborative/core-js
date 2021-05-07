import Symbol from 'core-js-pure/full/symbol';

QUnit.test('Symbol.for', assert => {
  assert.isFunction(Symbol.for, 'Symbol.for is function');
  const symbol = Symbol.for('foo');
  assert.strictEqual(Symbol.for('foo'), symbol, 'registry');
  assert.ok(Object(symbol) instanceof Symbol, 'returns symbol');
  assert.throws(() => Symbol.for(Symbol('foo')), 'throws on symbol argument');
});