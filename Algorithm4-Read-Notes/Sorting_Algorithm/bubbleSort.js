/**
 * 冒泡排序
 * @param {Array} arr
*/
function bubbleSort(arr) { //相邻位两两比较前位大于后位则位置互换
    let leng = arr.length;
    for(let i=0; i<leng; i++){
        for(let j=0; j<leng-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    };
    return arr;
}

console.log(bubbleSort([2,5,1,6,10,7]));