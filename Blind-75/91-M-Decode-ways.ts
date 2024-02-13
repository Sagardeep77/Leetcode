// https://leetcode.com/problems/decode-ways/

function numDecodings(s: string): number {
    const dp = {};
    const util = function(code:string, str:string) : number{

        if(!isValid(code)) return 0;
        if(dp[str]) return dp[str];
        if(str.length === 0) return 1;

        const L = util(str.substring(0,1), str.substring(1));
        const R = str.length > 1 ? util(str.substring(0,2), str.substring(2)) : 0;
        
        dp[str] = L + R;
        
        return dp[str];
    }

    if(s === "0") return 0;
    if(s.length === 1) return 1;
    return util(s[0], s.substring(1)) + util(s.substring(0,2), s.substring(2));
};

function isValid(code:string){
    if(code.length === 2 && code[0] === "0") return false;
    const int = parseInt(code);
    return int > 0 && int < 27;
}