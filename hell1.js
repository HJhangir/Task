const array = [3,4,11];
let sum = 0;

function funcArr(arr){

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
console.log(funcArr(array));


// const num1 = 3;
// const num2 = 4;
// const num3 = 11;

// const average = (num1 + num2 + num3) / 3;

// console.log(average);




