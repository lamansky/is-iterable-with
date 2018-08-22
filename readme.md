# is-iterable-with

Checks if a value is an iterable that outputs exactly the specified values.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i is-iterable-with
```

## API

The module exports a single function.

### Parameters

1. Bindable: `iterable` (any): The value that should be an iterable.
2. Variadic: `...values`: The values that should be iterated.

### Return Value

Returns `true` if `iterable` is an iterable and if its outputted values exactly equal the `values` arguments. Otherwise `false`.

## Example

```javascript
const isIterableWith = require('is-iterable-with')

const arr = [1, 2, 3]

isIterableWith(arr, 1, 2, 3) // true

isIterableWith(123) // false
isIterableWith(arr, 1, 2) // false
isIterableWith(arr, 1, 2, 3, 4) // false
isIterableWith(arr, 2, 1, 3) // false

// Supports the bind operator
arr::isIterableWith(1, 2, 3) // true
```

## Related

* [is-array-with](https://github.com/lamansky/is-array-with)
