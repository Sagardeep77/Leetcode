//https://leetcode.com/problems/perfect-squares/
const sqNumbers = (() => {
    const arr:number[] = [];

    for(let x = 1; x <= 10000; x++){
        arr.push(x*x);
    }
    return arr;
})();
const map = {};

function numSquares(n: number): number {
    if(n in map){
        return map[n];
    }
    const arr:number[] = [];
    for(const ele of sqNumbers){
        if(ele > n)
           break;
        arr.push(numSquares( n - ele));
    }
    if(arr.length === 0) return 0;
    map[n] = Math.min(...arr)+1;
    return map[n];
};