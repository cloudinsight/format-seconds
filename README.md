# format-seconds
[![](https://img.shields.io/travis/cloudinsight/format-seconds.svg)](https://travis-ci.org/cloudinsight/format-seconds)
[![](https://img.shields.io/npm/v/cloudinsight.svg)](https://www.npmjs.com/package/format-seconds)
[![](https://img.shields.io/coveralls/cloudinsight/vis-bonjour-network.svg)](https://coveralls.io/github/cloudinsight/format-seconds)
[![](https://img.shields.io/npm/dm/format-seconds.svg)](http://npm-stat.com/charts.html?package=format-seconds)
[![](https://img.shields.io/npm/l/format-seconds.svg)](https://github.com/cloudinsight/format-seconds/blob/master/LICENSE)

Format seconds to readable text

Partial implementation (10<sup>4</sup> ~ 10<sup>-24</sup>)
 of https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)
 
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
  
```
npm install format-seconds
```        

## Usage

```
import formatSeconds from 'format-seconds';
formatSeconds(0.042); // 0.042ms
```

## License 

MIT
