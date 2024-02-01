//https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome(s: string): string {
  
    let ans = '';
    let maxLength = 0;
 
 const util = function(l, r){
     while(l >=0 && r < s.length && s[l] === s[r]){
         const currStr = s.substring(l, r+1);
         if(currStr.length > maxLength){
             ans = currStr;
             maxLength = currStr.length;
         }
         l--;
         r++;
     }
 }

 for(let x = 0 ; x < s.length ; x++){
     const l = x;
     const r = x;
     util(l,r);
      util(l,r+1);
 }
 return ans;
}


