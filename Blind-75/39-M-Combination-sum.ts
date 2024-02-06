//https://leetcode.com/problems/combination-sum/
function combinationSum2(candidates: number[], target: number): number[][] {
    const helper = function (candidates: number[], target: number): number[][] {
        if (candidates.length === 0) return [];
        if (candidates[0] > target) return [];

        if (candidates[0] === target) return [[candidates[0]]];
        let ans = [];
        let added = helper(candidates, target - candidates[0]);
        if (added.length) {
            added = added.map(ele => [candidates[0], ...ele]);
            ans.push(...added);
        }

        let notAdded = helper(candidates.slice(1), target);
        if (notAdded.length) {
            ans.push(...notAdded)
        }

        return ans;
    }
    candidates = candidates.sort((a, b) => a - b);
    return helper(candidates, target);
};


//dfs

function combinationSum(candidates: number[], target: number): number[][] {
    const ans = [];

    const dfs = function (currIndex: number, currSum: number, currArr: number[]) {

        if (currSum === target) {
            ans.push([...currArr]);
            return;
        }
        if (currSum > target || currIndex >= candidates.length){
            return;
        }

        //include
        currArr.push(candidates[currIndex]);
        dfs(currIndex, currSum + candidates[currIndex], currArr);

        //not include
        currArr.pop();
        dfs(currIndex + 1, currSum, currArr);
    }

    dfs(0, 0, []);

    return ans;
}

