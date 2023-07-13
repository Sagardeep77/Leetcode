//Detetct a cycle in directed graph - DFS
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const visited = new Array(numCourses).fill(false);
  const pathVisited = new Array(numCourses).fill(false);
  const getMatrixObj = function (edges) {
    const matrix = {};
    for (let [left, right] of edges) {
      if (matrix.hasOwnProperty(right)) {
        matrix[right].push(left);
      } else {
        matrix[right] = [left];
      }
    }
    return matrix;
  };

  const dfs = function (currNode, matrix) {
    visited[currNode] = true;
    pathVisited[currNode] = true;
    if (matrix.hasOwnProperty(currNode)) {
      for (let node of matrix[currNode]) {
        if (visited[node] && pathVisited[node]) return false;
        if (!visited[node] && !dfs(node, matrix)) {
          return false;
        }
      }
    }
    pathVisited[currNode] = false;
    return true;
  };

  const matrix = getMatrixObj(prerequisites);
  for (let x = 0; x < numCourses; x++) {
    if (!visited[x] && !dfs(x,matrix)) {
      return false;
    }
  }
  return true;
}
