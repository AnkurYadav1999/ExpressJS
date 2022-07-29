const Filter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter age");
    }
    else if(req.query.age<18){
        res.send("You are small and cannot access");
    }
    else{
        next();
    }
}

module.exports=Filter;