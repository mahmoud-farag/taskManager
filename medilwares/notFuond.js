const notFound = (req,res, next)=>{
    res.status(404).send("this page not exist")
    
    next();
}

export {notFound}