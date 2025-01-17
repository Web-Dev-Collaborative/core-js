import { STRICT } from '../helpers/constants';

import codePointAt from 'core-js-pure/features/string/code-point-at';

QUnit.test('String#codePointAt', assert => {
  assert.isFunction(codePointAt);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', ''), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', '_'), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def'), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', -Infinity), undefined);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', -1), undefined);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', -0), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', 0), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', 3), 0x1D306);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', 4), 0xDF06);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', 5), 0x64);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', 42), undefined);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', Infinity), undefined);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', Infinity), undefined);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', NaN), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', false), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', null), 0x61);
  assert.strictEqual(codePointAt('abc\uD834\uDF06def', undefined), 0x61);
  assert.strictEqual(codePointAt('\uD834\uDF06def', ''), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', '1'), 0xDF06);
  assert.strictEqual(codePointAt('\uD834\uDF06def', '_'), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def'), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', -1), undefined);
  assert.strictEqual(codePointAt('\uD834\uDF06def', -0), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', 0), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', 1), 0xDF06);
  assert.strictEqual(codePointAt('\uD834\uDF06def', 42), undefined);
  assert.strictEqual(codePointAt('\uD834\uDF06def', false), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', null), 0x1D306);
  assert.strictEqual(codePointAt('\uD834\uDF06def', undefined), 0x1D306);
  assert.strictEqual(codePointAt('\uD834abc', ''), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', '_'), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc'), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', -1), undefined);
  assert.strictEqual(codePointAt('\uD834abc', -0), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', 0), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', false), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', NaN), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', null), 0xD834);
  assert.strictEqual(codePointAt('\uD834abc', undefined), 0xD834);
  assert.strictEqual(codePointAt('\uDF06abc', ''), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', '_'), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc'), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', -1), undefined);
  assert.strictEqual(codePointAt('\uDF06abc', -0), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', 0), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', false), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', NaN), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', null), 0xDF06);
  assert.strictEqual(codePointAt('\uDF06abc', undefined), 0xDF06);

  /* eslint-disable es/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    assert.throws(() => codePointAt(Symbol(), 1), 'throws on symbol context');
  }

  if (STRICT) {
    assert.throws(() => codePointAt(null, 0), TypeError);
    assert.throws(() => codePointAt(undefined, 0), TypeError);
  }
});
