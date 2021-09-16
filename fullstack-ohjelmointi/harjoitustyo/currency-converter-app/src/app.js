const express= require('express');
const app=express();
const path=require('path')
const forexData=require('../utils/forexData');
const hbs=require('hbs')

const axios=require('axios')




const publicStaticDirPath= path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));


app.get('',(req,res)=>{
    res.render('index',{
        title:'Currency converter'
    })
})

app.listen(3000,()=>{
    console.log('Forex server started!')
})










