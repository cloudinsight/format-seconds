/**
 * 移除小数末尾的 0
 * @param string
 * @return {*}
 */
const trimZero = (string) => {
  if (string && string.indexOf('.') !== -1) {
    return string.replace(/0+$/, '').replace(/\.$/, '')
  }
  return string;
}

export default trimZero;
