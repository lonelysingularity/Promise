

// tag： 数组求和
/**
 * 数组求和 
*/
function sum(arr){
    let sum = 0
    for(let x of arr){
        sum += x
    }
    return sum
}

const sum = arr=>{
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
let arr_1 = [1,2,3,4]
console.log(sum(arr_1));

