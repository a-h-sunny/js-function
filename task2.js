function avg(numbers){
    
  let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    let average = sum/ numbers.length;
    return average;

}

const numbers = [12,34,54,23,47,86];
console.log(avg(numbers));