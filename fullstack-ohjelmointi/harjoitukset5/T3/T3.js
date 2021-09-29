var fs = require('fs');

const sumingNumbersFromFile=()=>{

    try {  
        let data = fs.readFileSync('numbers.txt', 'utf8');
        console.log("Reading file and calculate a sum...")
        let dataList=data.toString().split(',').map(Number)
        console.log('Sum is ' + dataList.reduce((a,b)=>{return a+b}))


    } catch(e) {
        console.log("something is wrong!");
    }


}


sumingNumbersFromFile()
