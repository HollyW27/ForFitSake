const { isValidNumber } = require('./numberValidation')
const { bmiclass } = require('./bmiclass')

async function bmicalc(templateQ){
    const metric = await templateQ.question('Would you like to use kg and cm? (y/n)')
    if(metric == 'yes' || metric == 'y'){
        const heightMet = await templateQ.question('What is your height in cm? ')
        const heightMetCheck = await isValidNumber(heightMet);
        if(heightMetCheck == false){
            console.log('Please enter a valid number')
            bmicalc(templateQ);
        }
        else{
            const weightMet = await templateQ.question('What is your weight in kg? ')
            const weightMetCheck = await isValidNumber(weightMet)
            if(weightMetCheck == false){
                console.log('Please enter a valid number')
                bmicalc(templateQ);
            }
            else{
                const bmiMet = (weightMet/heightMet/heightMet)*10000
                const bmiArea = await bmiclass(bmiMet);
                console.log(`Your BMI is ${bmiMet}. This puts you into the ${bmiArea} category.`);
            }
        }
    }
    else if(metric == 'no' || metric == 'n'){
        const imperial = await templateQ.question('Would you like to use lbs and in? (y/n)')
        if(imperial == 'yes' || imperial == 'y'){
            const heightImp = await templateQ.question('What is your height in inches? ')
            const heightImpCheck = await isValidNumber(heightImp)
            if(heightImpCheck == false){
                console.log('Please enter a valid number')
                bmicalc(templateQ);
            }
            else{
                const weightImp = await templateQ.question('What is your weight in lbs? ')
                const weightImpCheck = await isValidNumber(weightImp)
                if(weightImpCheck == false){
                    console.log('Please enter a valid number')
                    bmicalc(templateQ);
                }
                else{
                    const bmiImp = (weightImp/heightImp/heightImp)*703
                    const bmiGroup = await bmiclass(bmiImp);
                    console.log(`Your BMI is ${bmiImp}. This puts you in the ${bmiGroup} category.`)
                }
            }
        }
        else if(imperial == 'no' || imperial == 'n'){
            console.log('Sorry we only have the two measurement systems please choose one')
            bmicalc(templateQ);
        }
        else{
            console.log('Please answer yes or no to the questions')
            bmicalc(templateQ);
        }
    }
    else{
        console.log('Please answer yes or no to the questions')
        bmicalc(templateQ);
    }
}
module.exports.bmicalc = bmicalc;