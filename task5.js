function oddEven(num){
    let even = 'even';
    let odd = 'odd';
    if(num%2==0){
        return even;
    }
    else {
        return odd;
    }
}
const num = 71;
console.log(oddEven(num));