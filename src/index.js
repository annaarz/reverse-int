module.exports = function reverse (n) {
    let array = n.toString().split('');
    return parseInt(array.reverse().join(''));
}
