/**
 * 归并排序
 */

 function mergeSort(arr) {
    if(arr.length<2){
        return arr;
    }
    let middleIndex = Math.floor(arr.length/2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);

    return merge(arguments.callee(left), arguments.callee(right)); // arguments.callee调用函数自身
    

    function merge(left, right){
        let result = [];
        while(left.length && right.length){
            if(left[0] <= right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        };

        while(left.length){
            result.push(left.shift())
        };
        
        while(right.length){
            result.push(right.shift())
        };

        return result;
    }
 }



 console.log(mergeSort([2,5,1,6,10,7,20,7]));