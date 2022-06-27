module.exports = function reverse(n) {
  const str = String(n).split("");
  while (str[str.length - 1] == 0) {
    str.pop();
  }
  if (str[0] == '-') {
    str.shift();
  }
  return Number(str.reverse().join(""));
}
