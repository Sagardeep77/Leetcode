//https://leetcode.com/problems/encode-and-decode-strings/description/
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      return strs
        .reverse()
        .map((str) => str.split('').reverse().join(''))
        .join('(-:-)');
    }
  
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      return str
        .split('(-:-)')
        .map((str) => str.split('').reverse().join(''))
        .reverse();
    }
  }