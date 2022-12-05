async function isValidNumber(number){
    if(number == isNaN){
        return false;
    }
    else if(number < 0){
        return false;
    }
    else{
        return true;
    } 
}

module.exports.isValidNumber = isValidNumber;