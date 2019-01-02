/**
 * 二分搜索
 * @param { Array } arr 
 * @param { Number } tar 
 */

function binarySearch(arr, tar) {
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((rightIndex+leftIndex)/2);
      if(tar>arr[middleIndex]){
        leftIndex = middleIndex+1;
      }else if(tar<arr[middleIndex]){
        rightIndex = middleIndex-1;
      }else{
        return middleIndex
      }
    }
    return -1;
}

console.log(binarySearch([1, 5, 8, 10, 3], 10));