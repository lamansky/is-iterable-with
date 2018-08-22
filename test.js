'use strict'

const assert = require('assert')
const isIterableWith = require('.')

describe('isIterableWith()', function () {
  it('should return false for a non-iterable', function () {
    assert.strictEqual(isIterableWith(123), false)
    assert.strictEqual(isIterableWith(null, 123), false)
    assert.strictEqual(isIterableWith(), false)
  })

  it('should return true for an iterable with no values', function () {
    assert.strictEqual(isIterableWith([]), true)
  })

  it('should return true if iterated values match arguments', function () {
    assert.strictEqual(isIterableWith([1, 2, 3], 1, 2, 3), true)
  })

  it('should return false if iterated values do not match arguments', function () {
    assert.strictEqual(isIterableWith([1, 2, 3], 3, 4, 5), false) // Wrong elements
    assert.strictEqual(isIterableWith([1, 2, 3], 1, 2), false) // Too many
    assert.strictEqual(isIterableWith([1, 2, 3], 1, 2, 3, 4), false) // Too few
    assert.strictEqual(isIterableWith([1, 2, 3], 2, 1, 3), false) // Wrong order

    assert.strictEqual(isIterableWith([1, 2, 3]), false)
    assert.strictEqual(isIterableWith([], 1), false)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isIterableWith.call([1, 2, 3], 1, 2, 3), true)
  })
})
