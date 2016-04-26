//工具类
function Util(){}
//冒泡排序
Util.prototype.bubbleSort = function(arr){
    let len = arr.length;
    let middle;
    while(len > 0){
        for(var i = 0; i < len - 1; i++){
            if(arr[i] > arr[i + 1]){
                middle = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = middle;
            }
        }
        len --;
    }
    return arr;
}
//快速排序
Util.prototype.quickSort = function(arr){
    if(arr.length <= 1) return arr;
    let middle = arr.splice(Math.floor(arr.length/2), 1)[0];
    let len = arr.length;
    let leftArr = [];
    let rightArr = [];
    for(var i = 0; i < len; i++){
        if(arr[i] < middle){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return Util.prototype.quickSort(leftArr).concat(middle, Util.prototype.quickSort(rightArr));
};
export default Util;