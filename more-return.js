function isEvenSized(str){
    const size = str.length;
    console.log(str,size);
    if(size % 2 === 0){
        console.log('even size',size);
        return true;
        
    }
    else{
        console.log('odd num')
        return false;
    }
}
isEvenSized('amarmathabethakorse');