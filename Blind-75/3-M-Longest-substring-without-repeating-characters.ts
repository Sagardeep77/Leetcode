function lengthOfLongestSubstring(s: string): number {
    if(s === "") return 0;
    let max = 0;
    const count = new Array(128).fill(0);
    let start = 0;
    let end = 0;
    while (end < s.length) {
        if (count[s[end].charCodeAt(0)] === 0) {
            count[s[end].charCodeAt(0)]++;
            end++;
            max = Math.max(max, end - start);
        }
        else {
            count[s[start].charCodeAt(0)]--;
            start++;
        }
    }
    return max;
};