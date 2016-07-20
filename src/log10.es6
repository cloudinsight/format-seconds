/**
 * polyfill for log10
 * @type {any}
 */
const log10 = Math.log10 || (x => Math.log(x) * Math.LOG10E);
export default log10;
