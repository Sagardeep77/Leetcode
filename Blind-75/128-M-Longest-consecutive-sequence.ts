//https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive1(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  let ans = 0;
  let window = 0;
  sorted.forEach((ele, i, arr) => {
    if (i > 0 && ele === arr[i - 1] + 1) {
      window++;
    } else {
      window = 1;
    }
    ans = Math.max(window, ans);
  });
  return ans;
}

function longestConsecutive(nums: number[]): number {
  let ans = 0;
  const set = new Set(nums);
  set.forEach((num) => {
    if (set.has(num + 1)) return;
    let count = 1;
    let currentNum = num - 1;
    while (set.has(currentNum)) {
      count++;
      currentNum--;
    }
    ans = Math.max(ans, count);
  });

  return ans;
}
