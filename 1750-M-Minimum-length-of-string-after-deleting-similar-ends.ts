function minimumLength(s: string): number {    
    if(!s || s.length === 1) return s.length;
    if(s[0] !== s[s.length - 1]) return s.length;
    const char = s[0];

    let left = 0 ;
    let right = s.length - 1;
    while(left <= right && s[left] === char){
        left++;
    }
    while(right > left && s[right] === char){
        right--;
    }
    return minimumLength(s.substring(left, right+1));
};