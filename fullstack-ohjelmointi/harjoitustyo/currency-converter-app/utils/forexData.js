const request=require('request')



const forexData=(currency)=>{
    const url= 'http://data.fixer.io/api/2013-12-24?access_key=d2118023c7b08fd86e4ba6b3405390e6&base=EUR&symbols='+currency;

    request(url,(error,{body})=>{
        const data=JSON.parse(body)
        targetCurrency=currency
        amount=data.rates
        
        
        
        
    })
}


module.exports=forexData;