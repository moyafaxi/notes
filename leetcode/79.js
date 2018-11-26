
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true.
// 给定 word = "SEE", 返回 true.
// 给定 word = "ABCB", 返回 false.



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  const dir = [{x:-1, y:0}, {x:0, y:1}, {x:1, y:0}, {x:0, y:-1}]; // 不同方向移动配置
  var visited = [];
  for(var i=0; i<board.length; i++) {
    let tempArr = [];
    for(var j=0; j<board[0].length; j++) {
      tempArr.push(false);
    }
    visited.push(tempArr)
  }
  function isInArea(x, y) {
    let m = board.length;
    let n = board[0].length;
    return x>=0 && x<m && y>=0 && y<n
  }

  for(var i=0; i<board.length; i++) {
    for(var j=0; j<board[0].length; j++) {
      if(searchWord(board, word, 0, i, j)) {
        return true;
      }
    }
  }
  return false;

  function searchWord(board, word, index, startX, startY) {
    if(index == word.length-1) {
      return board[startX][startY] == word[index];
    }
    if(board[startX][startY] == word[index]) {
      visited[startX][startY] = true;
      for(var l=0; l<4; l++) {
        var newX = startX+dir[l].x;
        var newY = startY+dir[l].y;
        if(isInArea(newX, newY) && !visited[newX][newY] && searchWord(board, word, index+1, newX, newY)) {
          return true
        }
      }
      visited[startX][startY] = false;
    }
    return false;
  }
};

var board = [["a"]]


console.log(exist(board, "ab"))

// 给定 word = "ABCCED", 返回 true.
// 给定 word = "SEE", 返回 true.
// 给定 word = "ABCB", 返回 false.