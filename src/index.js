module.exports = function reverse(n) {
    let str = '';
    for (let i of String(n)) {
        if (i != '-') {
            str = i + str;
        }
    }
    return str;
}
