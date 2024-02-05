function addArrayNum(numbers){
    // console.log(numbers)
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;
}
const numbers = [12,3,5,65,76];
console.log(addArrayNum(numbers));