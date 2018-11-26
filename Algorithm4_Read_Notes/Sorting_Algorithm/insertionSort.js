/**
 * 插入排序
 * @param {Array} arr 
 */
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) { // 前一位与当前元素比较如果大于则整体后移直到小于当前元素
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current; // 在该位置插入当前元素
    }
    return arr;
}
console.log(insertionSort([2,5,1,6,10,7,20,7]));