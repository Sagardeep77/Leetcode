// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
    let ans = 0;

    let start = 0;
    let end = 0;
    const countArr = new Array(26).fill(0);
    while(start <= end && end < s.length){
        const asciiChar = s[end].charCodeAt(0) - 65;
        countArr[asciiChar]++;
        const currWindowLen = end - start + 1;
        const maxFreq = Math.max(...countArr);
        if(currWindowLen - maxFreq <= k){
            end++;
            ans = Math.max(ans, currWindowLen);
        }
        else{
            const asciiChar_start = s[start].charCodeAt(0) - 65;
            countArr[asciiChar]--;
            countArr[asciiChar_start]--;
            start++;
        }
    }

    return ans;
};
