//https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/

function maxLength(arr: string[]): number {
    let maxLength: number = 0;
    const comb: string[] = [];
    const helper = (curr: string) => {
      const newComb: string[] = [];
  
      for (const str of comb) {
        if (!isOverlappingString(curr, str)) {
          maxLength = Math.max(maxLength, curr.length + str.length);
          newComb.push(curr + str);
        }
      }
      comb.push(...newComb, curr);
      maxLength = Math.max(maxLength, curr.length);
  
      return;
    };
  
    for (let curr of arr) {
      if(!isRepeatingChar(curr))  
          helper(curr);
    }
  
    return maxLength;
  }
  
  function isRepeatingChar(str:string){
      const count :number[] = new Array(26).fill(0);
  
      for(const char of str){
          count[char.charCodeAt(0) - 97]++;
      }
  
      for(const num of count){
          if(num > 1)
              return true
      }
      return false;
  }
  
  function isOverlappingString(str1: string, str2: string) {
    if (!str1 && !str2) return true;
    if (!str1 || !str2) return false;
  
    for (const char of str1) {
      if (str2.includes(char)) return true;
    }
    return false;
  }
  