
class  CreateCutomError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;  
    }
}

const customErrorHandlerFunc = (message,statusCode)=>{
    return new CreateCutomError(message, statusCode)
}


export {customErrorHandlerFunc, CreateCutomError};