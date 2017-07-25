/**
 * 普通查找
 */

function findArr(num){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==num)return i;
	}
	return -1;
}

/**
 * 二分查找
 */

function findArr2(num, start, end){
    //空的
    if(start>end){			
		return -1;
	}	//一个数
	else if(start==end){
		if(num==arr[start]){
			return start;
		}else{
			return -1;
		}
	}


	var cur=Math.floor((start+end)/2);
	
	if(arr[cur]==num){
        return cur;
        //return true
	}else{
		if(arr[cur]>num){
			//左边：start->cur-1
			return findArr2(num, start, cur-1);
		}
		else{
			//右边：cur+1->end
			return findArr2(num, cur+1, end);
		}
	}
}
