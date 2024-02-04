function isEvenSized(str){
    const size = str.length;
    console.log(str,size);
    if(size %2 === 0){
        console.log('even size',size);
        return true;
        
    }
    else{
        return false;
    }
}
isEvenSized('amarmathabethakorse');