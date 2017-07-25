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

/**
 * 二叉树
 * binaryTreeSearch
 */
/*
节点
{
	value:	数
	l:		左边
	r:		右边
}
*/

//根节点
var root=null;

function bst_add(node, n){
    //第一个
	if(root==null){
		//alert('创建根节点：'+n);
		root={value: n, l: null, r: null};
	}
	else{
        //重复
		if(node.value==n){
			//alert(n+'重复了，不要');
			return;
		}else{
			//alert('要插入的是：'+n+'，来到了：'+node.value);
				//右
			if(node.value<n){
				alert('试图往右走');
				if(node.r)		//右边有东西
				{
					alert('右边有东西，继续');
					bst_add(node.r, n);
				}
				else			//右边没东西
				{
					alert('右边没了，把'+n+'添加到'+node.value+'的右边');
					node.r={value: n, l: null, r: null};
				}
			}
			else				//左
			{
				alert('试图往左走');
				if(node.l)
				{
					alert('左边有东西，继续');
					bst_add(node.l, n);
				}
				else
				{
					alert('左边没了，把'+n+'添加到'+node.value+'的左边');
					node.l={value: n, l: null, r: null};
				}
			}
		}
	}
}

for(var i=0;i<10;i++){
	bst_add(root, parseInt(Math.random()*20));
}