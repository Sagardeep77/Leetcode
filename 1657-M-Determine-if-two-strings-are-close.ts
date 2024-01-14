function closeStrings(word1: string, word2: string): boolean {
    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    for (const char of word1) {
        count1[char.charCodeAt(0) - 97]++;
    }

    for (const char of word2) {
        count2[char.charCodeAt(0) - 97]++;
    }

    //check for character presence
    for (let x = 0; x < 26; x++) {
        if ((count1[x] === 0 && count2[x] !== 0) || count2[x] === 0 && count1[x] !== 0)
            return false;
    }

    //sort the frequency and compare it

    const count1Sorted = count1.sort((a, b) => a - b);
    const count2Sorted = count2.sort((a, b) => a - b);

    for (let x = 0; x < 26; x++) {
        if (count1Sorted[x] !== count2Sorted[x])
            return false
    }
    return true;
};