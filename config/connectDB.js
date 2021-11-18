import mongoose from 'mongoose';

// const URL ='mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/TaskManagerDB?retryWrites=true&w=majority';

const connectToDB = (URL)=>{
   return  mongoose.connect(URL,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });
}



export {
    connectToDB
}