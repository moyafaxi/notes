/**
 * 希尔排序
 */
 function shellSort(arr) {
    let leng = arr.length;
    let gap = Math.floor(leng/2);
    while(gap>0){ //增量最小为1
        for(let i=0; i<=gap; i++){      
            for(let j=i+gap; j<leng; j+=gap){ // 对间隔为gap的数组分别进行插入排序
                let currentItem = arr[j];
                let prevIndex = j-gap;  
                while(prevIndex>=0 && currentItem<arr[prevIndex]){ // 插入排序，注意数组间隔为gap
                    arr[prevIndex+gap] = arr[prevIndex];
                    prevIndex -= gap;    
                };
                arr[prevIndex+gap] = currentItem;
            }
        };
        gap=Math.floor(gap/2); // 不断减小增量
    };
    return arr;
 }

 console.log(shellSort([2, 5 ,1, 6, 10, 7, 20, 7]));