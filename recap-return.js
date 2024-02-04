function result(a,b){
    let total = a + b;
    if(total<40){
        console.log('you are fail')
    }
    else{
        console.log('you passed')
    }
    return total;
}
const theory = 30;
const mcq = 20;
result(theory,mcq);

