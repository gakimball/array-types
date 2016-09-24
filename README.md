# array-types

> Get the types of values in an array

## Installation

```bash
npm install array-types
```

## Usage

```js
var types = require('array-types');

types(['one', 'two', 'three']); // => 'string'
types([1, 2, 3]); // => 'number'
types(['one', 2, null]); // => ['string', 'number', 'null']
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
