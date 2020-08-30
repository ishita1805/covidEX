const express = require('express')
const app = express();
const path = require('path') 
const viewsDir = path.join(__dirname,'../views') 
app.set('view engine', 'hbs') 
app.set('views', viewsDir)  
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname,'../public')
const covid = require('./covid19.js')

app.use(express.static(publicDir)) 

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/covid-stats',(req,res)=>{
    covid((err,body)=>{
        res.render('updates',{data:body.statewise})

    })
//    res.render('updates')
})

app.get('/lisa-bot',(req,res)=>{
    res.render('lisabot')
})

app.listen(port,()=>{
    console.log('this is local host '+ port)
})