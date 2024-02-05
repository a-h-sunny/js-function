function count(string){
    let zero=0;
    for(let i=0; i<string.length; i++){
        if(string[i]==0){
            zero++;
        }
    }
    return zero;
}
let string = '1101110001';
console.log(count(string));