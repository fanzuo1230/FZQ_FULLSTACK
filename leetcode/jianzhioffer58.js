

/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，
该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 解题思路：
 * 1.将原数组按n的位置切开，分成两个数组a，b
 * 将这两个数组调位再拼接
 */
 var reverseLeftWords = function(s, n) {
    let a=s.slice(0,n);
    let b=s.slice(n,s.length);
    return b.concat(a)
};

