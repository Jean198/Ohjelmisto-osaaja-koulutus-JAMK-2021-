
const path=require('path')


let arrayRange= process.argv[2]
let minValue=process.argv[3]
let maxValue= process.argv[4]

if((process.argv < 5)|| (isNaN(arrayRange)) || (isNaN(minValue))|| (isNaN(maxValue))){
    console.log('RANDOMIZED_NUMBERS_COUNT MIN_VALUE MAX_VALUE')
    process.exit()
}



const createRandomInt= ()=>{
    randomNumbers=[]
    for (let num=0; num<arrayRange; num++){
        let randomNum= Math.floor(Math.random()*(maxValue-minValue + 1))+1
        randomNumbers.push(randomNum)
    }
    return randomNumbers
}

console.log(createRandomInt())




