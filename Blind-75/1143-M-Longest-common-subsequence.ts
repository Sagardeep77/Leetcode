
// 1143-M-Longest-common-subsequence
//https://leetcode.com/problems/longest-common-subsequence/description/

function longestCommonSubsequence(text1: string, text2: string): number {
    const dp = {};
    return lcs(text1, text2, dp).length;
};

function lcs(text1: string, text2: string, dp: any) : string{
    if(!text1 || !text2) return "";
    if(dp[`${text1.length}-${text2.length}`] !== undefined){
        return dp[`${text1.length}-${text2.length}`];
    }
    let ans = "";
    for(let x = 0; x < Math.min(text1.length, text2.length); x++){
        if(text1[x] === text2[x]) ans += text1[x];
        else break;
    }
    const firstPair = ans + lcs(text1.substring(1+ans.length), text2.substring(ans.length), dp);

    const secondPair = ans + lcs(text1.substring(ans.length), text2.substring(1+ans.length), dp);
    dp[`${text1.length}-${text2.length}`] = firstPair.length > secondPair.length ? firstPair : secondPair
    return firstPair.length > secondPair.length ? firstPair : secondPair;
}