/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    
    const countMap = nums.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? new HeapNode(curr, acc[curr].frequency + 1) :  new HeapNode(curr, 1);
        return acc;
    }, {});

    const sortedValues = Object.values(countMap).sort((a ,b ) =>  b.frequency - a.frequency);

    const ans = [];
    let index = 0;
    while (index < k) {
        ans.push(sortedValues[index++].key);
    }
    return ans;
}

class HeapNode{
    constructor(key,freq){
        this.key = key;
        this.frequency = freq;
    }
}
