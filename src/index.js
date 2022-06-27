module.exports = function reverse(n) {
  const str = Math.abs(n).toString().split("");
  while (str[str.length - 1] == 0) {
    str.pop();
  }
  return Number(str.reverse().join(""));
}
