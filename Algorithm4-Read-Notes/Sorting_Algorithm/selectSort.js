/**
 * 选择排序
 * @param {Array} arr 
 */
function selectSort(arr) { //每遍循环找出当次的最大值移动至数组结尾
    let leng = arr.length;
    for(let i=0; i<leng; i++){
        let maxIndex = 0;
        for(let j=0; j<leng-i; j++){
            if(arr[j]>arr[maxIndex]){
                maxIndex = j;       
            }
        }
        let last = arr[leng-1-i];
        arr[leng-1-i] = arr[maxIndex];
        arr[maxIndex] = last;
    };
    return arr;
}

console.log(selectSort([2,5,1,6,10,7]));