function doubleortripple(num,doDubble){
    if(doDubble==true){
        const output = num*2;
        return output;
    }
    else{
        const output = num*3;
        return output;
    }
}
console.log(doubleortripple(50,true));
console.log(doubleortripple(50,false));