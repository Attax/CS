
/**
 * 冒泡排序
 */

 function bubbleSort(arr){
    for(var i=0,l=arr.length;i<l-1;i++){
        for(var j=i+1;j<l;j++){
            if(arr[i]>arr[j]){
                //交换位置
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

    return arr;
 }


 /**
  * 快速排序
  */


  function quickSort(arr){
      if(arr.length<=1){
          return arr;
      }


      var leftArr=[];
      var rightArr=[];

      let quick=arr[0];

      for(var i=1;i<arr.length;i++){
          if(arr[i]>quick){
              rightArr.push(arr[i]);
          }else{
              leftArr.push(arr[i]);
          }
      }
      //递归调用quickSort
      return [].concat(quickSort(leftArr),[quick],quickSort(rightArr));
  }