//O(n)

function maxArea(arr: number[]): number {
    let ptr1 = 0;
    let ptr2 = arr.length - 1;
    let ans = 0;
    while (ptr1 < ptr2) {
      const currArea = (ptr2 - ptr1) * Math.min(arr[ptr2], arr[ptr1]);
  
      ans = Math.max(ans, currArea);
  
      if (arr[ptr1] < arr[ptr2]) {
        ptr1++;
      } else {
        ptr2--;
      }
    }
    return ans;
  }
  