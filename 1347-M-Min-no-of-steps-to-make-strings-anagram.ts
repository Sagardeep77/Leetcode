function minSteps(s: string, t: string): number {
    const s1map = new Array(26).fill(0);

    for (const char of s) {
        s1map[char.charCodeAt(0) - 97]++;
    }
    for (const c of t) {
        const index = c.charCodeAt(0) - 97;
        if (s1map[index] > 0) {
            s1map[index]--;
        }
    }

    return s1map.reduce((acc, curr) => acc + curr);
};
