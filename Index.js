const readline = require('readline/promises');
const { bmicalc } = require('./bmi/bmicalc');
const { targetWeight } = require('./targetWeight/targetWeight')

async function main(){
    const templateQ = readline.createInterface({input: process.stdin,output: process.stdout});
    //const bmi = await bmicalc(templateQ);
    const targWeight = await targetWeight(templateQ);
}
main();