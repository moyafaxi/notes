// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

// 示例 1: 
// 输入:

// 0 0 0
// 0 1 0
// 0 0 0
// 输出:

// 0 0 0
// 0 1 0
// 0 0 0
// 示例 2: 
// 输入:

// 0 0 0
// 0 1 0
// 1 1 1
// 输出:

// 0 0 0
// 0 1 0
// 1 2 1
// 注意:

// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。


// 解题思路 循环遍历二维数组每一个元素进行广度优先遍历 找到该元素到最近0 的距离

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const dirConfig = [{x: -1, y: 0}, {x: 0, y: 1}, {x: 1, y:0}, {x:0, y: -1}]; // 移动方向配置文件
  var m = matrix.length;
  var n = matrix[0].length;

  var visited = [];
  for(var i=0; i<matrix.length; i++) {
    let tempArr = [];
    for(var j=0; j<matrix[0].length; j++) {
      tempArr.push(false);
    }
    visited.push(tempArr)
  }
  function isInMatrix (x, y) {
    return x >= 0 && x < m && y >= 0 && y < n
  }
  
  function BFS(matrix, originX, originY, startX, startY, temp) {
    visited[startX][startX] = true
    for (var dir=0; dir<dirConfig.length; dir++) {
      let newX = startX + dirConfig[dir].x;
      let newY = startY + dirConfig[dir].y;
      if (isInMatrix(newX, newY) && !visited[newX][newY]) {
        console.log(matrix[newX][newY], newX, newY)
        if (matrix[newX][newY] == 0) {
          matrix[originX][originY] = temp;
          temp = 0;
          return matrix;
        } else {
          BFS(matrix, originX, originY, newX, newY, temp+1)
        }
      }
    }
    console.log('3')
    return matrix;
  }

  for (var i=0; i<matrix.length; i++) {
    for (var j=0; j<matrix[0].length; j++) {
      BFS(matrix, i, j, i, j, 1)
    }
  }
};


var testData = [
  [0, 0, 0],
  [0, 1, 0]
  [1, 1, 1]
];

updateMatrix(testData)