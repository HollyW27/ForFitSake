const { isValidNumber } = require("../bmi/numberValidation")

async function targetWeight(templateQ){
    const setOrRec = await templateQ.question('Would you like to set a target weight or be recommended one? (Please enter (set or rec))')
    if(setOrRec == 'set' || setOrRec == 'Set'){
        const imp = await templateQ.question('Would you like to use Imperial units? (lbs) please answer (yes or no): ')
        if(imp == 'yes' || imp == 'y'){
            const goalImp = await templateQ.question('What would you like to set your weight goal to? ')
            const goalImpCheck = isValidNumber(goalImp);
            if(goalImpCheck == false){
                console.log('Please enter a valid number')
                targetWeight(templateQ);
            }
            else{
                console.log(`Your target weight is ${goalImp}lbs`)
                //Database Entry here
            }
        }
        else if(imp == 'no' || imp == 'n'){
            const met = templateQ.question('Would you like to use Metric units? (Kg) please answer (yes or no): ')
            if(met == 'yes' || met == 'y'){
                const goalMet = await templateQ.question('What would you like to set your weight goal to? ')
                const goalMetCheck = isValidNumber(goalMet);
                if(goalMetCheck == false){
                    console.log('Please enter a valid number')
                    targetWeight(templateQ);
                }
                else{
                    console.log(`Your target weight is ${goalMet}kg`)
                    //Database Entry here
                }
            }
            else{
                console.log('Please try again')
                targetWeight(templateQ);
            }
        }
        else{
            console.log('Please answer the questions correctly')
            targetWeight(templateQ);
        }
    }
    else if(setOrRec == 'rec' || setOrRec == 'Rec'){
        const impMet = await templateQ.question('Would you like to use imperial (in) or metric (cm)? (Please enter imp or met): ')
        if(impMet == 'imp' || impMet == 'Imp'){
            const heightImp = await templateQ.question('Please enter your height in (in): ')
            const heightImpCheck = isValidNumber(heightImp);
            if(heightImpCheck == false){
                console.log('Please enter a valid number')
                targetWeight();
            }
            else{
                const minBmiRecImp = 0.02631578947*heightImp*heightImp;
                const maxBmiRecImp = 0.03556187766*heightImp*heightImp;
                const setValid = await templateQ.question(`We recommend that you have a weight between ${minBmiRecImp}lbs and ${maxBmiRecImp}lbs. Would you like to use this? (yes or no): `)
                if(setValid == 'no' || setValid == 'n'){
                    console.log('Sorry We could not help please try again')
                    targetWeight(templateQ);
                }
                else if(setValid == 'yes' || setValid == 'y'){
                    console.log('We have saved this as your goal')
                    //Add to Database
                    return
                }
                else{
                    console.log('Please answer the questions correctly')
                    targetWeight(templateQ);
                }
            }
        }
        else if(impMet == 'met' || impMet == 'Met'){
            const heightMet = await templateQ.question('Please enter your height in (cm): ')
            const heightMetCheck = isValidNumber(heightMet);
            if(heightMetCheck == false){
                console.log('Please enter a valid number')
                targetWeight();
            }
            else{
                const minBmiRecMet = 0.00185*heightMet*heightMet;
                const maxBmiRecMet = 0.0025*heightMet*heightMet;
                const setValid = await templateQ.question(`We recommend that you have a weight between ${minBmiRecMet}kg and ${maxBmiRecMet}kg. Would you like to use this? (yes or no): `)
                if(setValid == 'no' || setValid == 'n'){
                    console.log('Sorry We could not help please try again')
                    targetWeight(templateQ);
                }
                else if(setValid == 'yes' || setValid == 'y'){
                    console.log('We have saved this as your goal')
                    //Add to Database
                    return
                }
                else{
                    console.log('Please answer the questions correctly')
                    targetWeight(templateQ);
                }
            }
        }
        else{
            console.log('Please try again')
            targetWeight(templateQ);
        }
    }
    else{
        console.log('Please answer the question correctly');
        targetWeight(templateQ);
    }
}
module.exports.targetWeight = targetWeight;