function UserAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.status(401).json({error:"User doesn't authenticated"})
}

module.exports={
    UserAuthenticated
}