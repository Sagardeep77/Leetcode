//https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
    let ans = 0;
    let ansStr = '';

    function util(l,r){
        let currLength = 0;
        while(s[l] === s[r] && l >= 0 && r < s.length){
            currLength = r - l + 1;
            if(currLength > ans){
                ans = currLength;
                ansStr = s.substring(l, r+1);
            }
            l--;
            r++;
        }
    }

    for(let x = 0 ; x < s.length; x++){
        util(x,x);
        util(x, x+1);
    }

    return ansStr;
}


