// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

// 示例 1:

// 输入:
// 11110
// 11010
// 11000
// 00000

// 输出: 1
// 示例 2:

// 输入:
// 11000
// 11000
// 00100
// 00011

// 输出: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  var visited = [];
  var dir = [{x:-1, y:0}, {x:0, y:1}, {x:1, y:0}, {x:0, y:-1}]; // 不同方向移动配置
  
  var res = 0;

  function inArea(x, y) {
    return x >=0 && x<=grid.length-1 && y>=0 && y<=grid[0].length-1
  }

  for(var i=0; i<grid.length; i++) {
    let tempArr = [];
    for(var j=0; j<grid[0].length; j++) {
      tempArr.push(false);
    }
    visited.push(tempArr)
  }

  for(var i=0; i<grid.length; i++) {
    for(var j=0; j<grid[0].length; j++) {
      if(grid[i][j] == 1 && !visited[i][j]) {
        res++;
        dfsSearch(grid, visited, i, j)  
      }
    }
  }

  function dfsSearch(grid, visited, i, j) {
    visited[i][j] = true;
    for(var l=0; l<4; l++) {
      var newX = i+dir[l].x;
      var newY = j+dir[l].y;
      
      if(inArea(newX, newY)) {
        if(grid[newX][newY] == 1 && !visited[newX][newY]) { 
          dfsSearch(grid, visited, newX, newY)
        }
      }
    }
    return;
  }
  
  return res;
};

var grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];
console.log(numIslands(grid));