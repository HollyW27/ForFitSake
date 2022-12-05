async function bmiclass(bmiVal){
    if (bmiVal < 18.5){
        return 'underweight';
    }
    else if (bmiVal > 18.5 && bmiVal < 25){
        return 'normal weight';
    }
    else if (bmiVal > 30 && bmiVal < 40){
        return 'Obese';
    }
    else{
        return 'Morbidly obese'
    }
}
module.exports.bmiclass = bmiclass;