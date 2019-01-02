/**
 * 给定一个矩阵m，从左上角开始每次只能向右走或者向下走，最后达到右下角的位置，路径中所有数字累加起来就是路径和，返回所有路径的最小路径和，如果给定的m如下，
 * 那么路径1,3,1,0,6,1,0就是最小路径和，返回12.
 * 
 * 1 3 5 9
 * 8 1 3 4
 * 5 0 6 1
 * 8 8 4 0 
 * 
 * 分析：对于这个题目，假设m是m行n列的矩阵，那么我们用dp[m][n]来抽象这个问题，dp[i][j]表示的是从原点到i,j位置的最短路径和。我们首先计算第一行和第一列，
 * 直接累加即可，那么对于其他位置，要么是从它左边的位置达到，要么是从上边的位置达到，我们取左边和上边的较小值，然后加上当前的路径值，就是达到当前点的最短
 * 路径。然后从左到右，从上到下依次计算即可。
 */

let matrix = [
    [1,3,5,9],
    [8,1,3,4],
    [5,0,6,1],
    [8,8,4,0]
]

let dp = [];

for(let i=0; i<matrix.length; i++){
    dp[i] = [];
    for(let j=0; j<matrix[i].length; j++){
        dp[i][j]='a'
    }
}


for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j<matrix[i].length; j++){
        if (dp[i][j] == 'a'){
           if (i==0&&j==0)
               dp[i][j] = matrix[i][j];
           else if (i==0&&j!=0)
               dp[i][j] = matrix[i][j] + dp[i][j-1];
           else if(i!=0&&j==0)
               dp[i][j] = matrix[i][j] + dp[i-1][j];
           else{
               dp[i][j] = matrix[i][j]+Math.min(dp[i-1][j],dp[i][j-1]);
           }
        }
    }
}

console.log(dp[3][3]);


