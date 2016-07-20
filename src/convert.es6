import log10 from './log10';

const UNITS = [
  "ms",
  "µs",
  "ns",
  "ps",
  "fs",
  "as",
  "zs",
  "ys"
]

/**
 * https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)
 *
 * @param number
 * @return {*}
 */
const convert = number => {
  if (number === null) {
    return null;
  }
  const absolute = Math.abs(number);
  if (absolute > 10000) {
    return `${(number / 3600).toFixed(2)} h`
  } else if (absolute >= 1) {
    return `${(number * 1).toFixed(2)} s`
  } else if (number === 0) {
    return '0';
  }

  const unitIndex = 0 - Math.ceil(log10(absolute) / 3);
  const scaleFactor = Math.pow(10, (1 + unitIndex) * 3);

  return `${(number * scaleFactor).toFixed(2)} ${UNITS[unitIndex]}`
};

module.exports = convert;
