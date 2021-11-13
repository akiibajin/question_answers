function UserAuthenticated(req,res,next){
    const user = req.user
    const isAuthenticated = req.isAuthenticated();
    if(isAuthenticated){
        return next()
    }
    res.status(401).json({error: "User doesn't authenticated"})
}

module.exports={
    UserAuthenticated
}