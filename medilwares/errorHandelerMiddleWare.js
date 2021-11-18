import { CreateCutomError } from "./customError.js";

const errorHandler = (error, req,res, next)=>{

    if(error instanceof CreateCutomError){
       return res.status(error.statusCode).json(error.message);
    }
    res.status(500).send({message: error.message})
    next();
};

export {errorHandler}