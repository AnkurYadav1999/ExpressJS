const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("This is Home Page "+req.query.name);
})

app.get('/about',(req,res)=>{
    res.send("This is About Page");
})

app.get('/users',(req,res)=>{
    res.send("This is Users Page");
})

app.get('/contact',(req,res)=>{
    res.send("This is contact Page");
})

app.listen(4000)

