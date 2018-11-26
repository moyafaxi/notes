
// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 示例:

// X X X X
// X O O X
// X X O X
// X O X X
// 运行你的函数后，矩阵变为：

// X X X X
// X X X X
// X X X X
// X O X X
// 解释:

// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连
// 的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。


// 解题思路

// 扫描矩阵的四条边，如果有O，则用DFS遍历，将所有连着的O都变成另一个字符，比如$，这样剩下的O都是被包围的，然后将这些O变成X，把$变回O就行了。代码如下：


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const dir = [{x:-1, y:0}, {x:0, y:1}, {x:1, y:0}, {x:0, y:-1}]; // 不同方向移动配置
  for(var i=0; i<board.length; i++) {
    for(var j=0; j<board[0].length; j++) {
      if(i==0 || i==board.length-1 || j==0 || j==board[0].length-1) {
        if(board[i][j] == 'O') {
          dfsSearch(board, i, j)
        }
      }
    }
  }

  for(var i=0; i<board.length; i++) {
    for(var j=0; j<board[0].length; j++) {
      if(board[i][j] == 'O') {
        board[i][j] = 'X'
      }
      if(board[i][j] == '$') {
        board[i][j] = 'O'
      }
    }
  }

  function dfsSearch(board, i, j) {
    if(board[i][j] == 'O') {
      board[i][j] = '$'
      if (i > 0 && board[i - 1][j] == 'O') 
        dfsSearch(board, i - 1, j);
      if (j < board[i].length - 1 && board[i][j + 1] == 'O') 
        dfsSearch(board, i, j + 1);
      if (i < board.length - 1 && board[i + 1][j] == 'O') 
        dfsSearch(board, i + 1, j);
      if (j > 1 && board[i][j - 1] == 'O') 
        dfsSearch(board, i, j - 1);
    }
  }
};

var board = [
  ['X','X','X','X'],
  ['X','O','O','X'],
  ['X','X','O','X'],
  ['X','O','X','X']
]


solve(board);

console.log(board);