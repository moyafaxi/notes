// /**
//  * 动态规划解法
//  * @param {Number} num 
//  */
// function maxMultiply(num) {
//     //memo[i] 代表数字i分割得到数的最大乘积
//     var memo = new Array(num+1);
//     memo.fill(-1);

//     memo[1] = 1;

//     for(var i=2; i<=num; i++){
//         //求解memo[i]
//         for(var j=1; j<=i-1; j++){
//             memo[i] = Math.max(memo[i], j*(i-j), j*memo[i-j]);
//         }
//     }
//     return memo[num];
// }

/**
 * 递归解法 记忆化搜索
 * @param {Number} num 
 */
function maxMultiply(num) {
    var memo = (new Array(num+1)).fill(-1);
    var res = -1;
    if(memo[num] != -1){
        return memo[num];
    }
    for(var i=1; i<num; i++){
        res = Math.max(res, i*(num-i), i*maxMultiply(num-i));
    }
    memo[num] = res;
    return res;
}

console.log(maxMultiply(10));