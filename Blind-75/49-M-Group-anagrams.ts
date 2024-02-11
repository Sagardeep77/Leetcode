//https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {

    const countMap = new Map<string, string[]>();

    for (const str of strs) {
        const currKey = getKey(str);
        if (countMap.has(currKey)) {
            const currKeyArr = countMap.get(currKey);
            currKeyArr.push(str);
        }
        else {
            countMap.set(currKey, [str]);
        }
    }
    return [...countMap.values()];
}

function getKey(str: string) {
    if (!str) return "" ;
    const arr = new Array(26).fill(0);

    for (const char of str) {
        const index = char.charCodeAt(0) - 97;
        arr[index] += 1;
    }

    const key = arr.join('.');
    arr.splice(0)
    return key;
}
;