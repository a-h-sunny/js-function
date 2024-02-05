function evennum(numbers){
    console.log(numbers)
    let even = [];
    for(const num of numbers){
        if(num%2==0){
            even.push(num);
        }
       
    }
    return even;
}

const numbers = [12,3,43,56,77,98,23,34,46];
console.log(evennum(numbers));