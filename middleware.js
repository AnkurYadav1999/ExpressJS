const express =  require("express")
const Filter = require('./middlewaredata')
const app = express();
const route = express.Router();


route.use(Filter);
app.get('',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

route.get('/contact',(req,res)=>{
    res.send("Contact Page")
})

app.use('/',route);

app.listen(4000);