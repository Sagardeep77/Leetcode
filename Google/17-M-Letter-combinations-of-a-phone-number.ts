// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
const digitComb = {
    2 : ["a", "b", "c"],
    3 : ["d", "e", "f"],
    4 : ["g", "h", "i"],
    5 : ["j", "k", "l"],
    6 : ["m", "n", "o"],
    7 : ["p", "q", "r", "s"],
    8 : ["t", "u", "v"],
    9 : ["w", "x", "y", "z"],
}

function letterCombinations(digits: string): string[] {
    if(digits === "") return [];
    if(digits.length === 1) return digitComb[digits]
    const digit = parseInt(digits[0]);
    const ans = [];
    const comb = letterCombinations(digits.substring(1));
    for(const eachDigit of digitComb[digit]){
        ans.push(...comb.map(e => eachDigit+e));
    }
    return ans;
};      