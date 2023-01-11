module.exports = function reverse (n) {
  let str = '';
    for (let i of String(n)) {
        str = i + str;
    }
    return str;
}
