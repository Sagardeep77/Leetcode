//https://leetcode.com/problems/decode-string/

const digitArr = new Array(10).fill(0).map((_, i) => `${i}`);

function decodeString(s: string): string {
    const stack = [];
    for(let x = 0 ; x < s.length; x++){
        if(s[x] === "]"){
            let ans = "";
            let currStr = "";
            let integerStr = "";
            while(stack[stack.length - 1] !== "["){
                currStr = stack.pop() + currStr;
            }
            stack.pop() // will pop [
            while(stack.length && digitArr.includes(stack[stack.length - 1])){
                integerStr = stack.pop() + integerStr;
            }
            let int = parseInt(integerStr);
            while(int--){
                ans += currStr;
            }
            stack.push(ans);
        }
        else{
            stack.push(s[x])
        }
    }
    
    return stack.join("");
};