# format-seconds
[![](https://img.shields.io/travis/cloudinsight/format-seconds.svg)](https://travis-ci.org/cloudinsight/format-seconds)
[![](https://img.shields.io/npm/v/format-seconds.svg)](https://www.npmjs.com/package/format-seconds)
[![](https://img.shields.io/npm/dm/format-seconds.svg)](http://npm-stat.com/charts.html?package=format-seconds)
[![](https://img.shields.io/npm/l/format-seconds.svg)](https://github.com/cloudinsight/format-seconds/blob/master/LICENSE)

> Format duration in seconds to readable string.

A partial implementation (10<sup>4</sup> ~ 10<sup>-24</sup>)
 of https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)

## Examples

[DEMO](http://codepen.io/longtian/pen/GqxRor?editors=1010)

## Test cases
 
|  input |  expected  |
|:-------|:-----------|
| 24236 |  6.73 h  |
| 10000 |  10000.00 s  |
| 1000 |  1000.00 s  |
| 1.244 |  1.24 s  |
| 0.0023 |  2.30 ms  |
| 0.0000023 |  2.30 µs  |
| 2.3e-9 |  2.30 ns  |
| 1 |  1.00 s  |
 
## Installation

*For Node.js:*

```sh
npm install format-seconds
```

*For Browsers:*

Add a script tag which points to `formatSeconds.min.js`

## Usage

```js
formatSeconds(0.042); // 0.042ms
```

## License 

MIT
