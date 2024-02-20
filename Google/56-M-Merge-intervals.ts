//https://leetcode.com/problems/merge-intervals/
function merge(intervals: number[][]): number[][] {
    const ans = [];
    
    const mergeInterval = (intervalX, intervalY) => {
        const [startX, endX] = intervalX;
        const [startY, endY] = intervalY;

        if(endX >= startY) 
            ans[ans.length - 1] = [Math.min(startX, startY), Math.max(endX, endY)];
        else
            ans.push(intervalY)
    }
    
    intervals= intervals.sort((x,y) => x[0] - y[0]);
    ans.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++){
        mergeInterval(ans[ans.length - 1], intervals[i]);
    }
    return ans;
};