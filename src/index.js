module.exports = function reverse(n) {
  const str = n.toString();
  const arr = str.split('');
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join('');
  const result = parseInt(reversedStr, 10);
  return result;
};
