'use strict'

const isIterable = require('is-iterable')
const sbo = require('sbo')

module.exports = sbo(function isIterableWith (iterable, ...values) {
  if (!isIterable(iterable)) return false
  for (const x of iterable) if (values.length === 0 || values.shift() !== x) return false
  return values.length === 0
})
