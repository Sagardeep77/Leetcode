// https://leetcode.com/problems/set-mismatch/description/

//optimized
function findErrorNums(nums: number[]): number[] {
    const count = new Array(nums.length + 1).fill(0);
    nums.forEach((ele) => count[ele]++);
    let duplicate, correct;

    count.forEach((frequency, index) => {
        if (frequency === 0 && index != 0) {
            correct = index;
        }
        if (frequency === 2) {
            duplicate = index;
        }
    })

    return [duplicate, correct];
}


//counting the sum and then calculating
function findErrorNums2(nums: number[]): number[] {
    const map = new Map();
    let duplicateNo;
    const sum = nums.reduce((acc, curr) => {
        if (map.has(curr)) {
            duplicateNo = curr;
        } else {
            map.set(curr, true);
        }
        return acc + curr;
    }, 0);
    const n = nums.length;

    const sumShouldBe = (n * (n + 1)) / 2;

    return [duplicateNo, sumShouldBe - sum + duplicateNo];
}
