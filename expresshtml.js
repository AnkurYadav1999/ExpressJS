const express = require('express')
const app  = express();


app.get('',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})

app.get('/data',(req,res)=>{
    res.send({name:"Ankur",age:23})
})

app.listen(4000);