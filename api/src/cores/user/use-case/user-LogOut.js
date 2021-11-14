

const userLogOut=(req,res)=>{
    req.logout()
    res.json({message:"Ok"})
  }

module.exports=userLogOut