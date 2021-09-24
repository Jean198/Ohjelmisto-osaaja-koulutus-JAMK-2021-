let p=new Promise((resolve,reject)=>{
    let sum=2+3;

    if (sum==5){
       resolve() 

    }

    else{
        reject("Promise didnt go well!")
    }
})


p.then((message)=>{
    console.log("message")
}).catch((error)=>{
    console.log(error)
})