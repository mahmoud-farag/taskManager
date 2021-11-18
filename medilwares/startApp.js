import { connectToDB } from '../config/connectDB.js';
import { asyncWrapper } from './asyncWrapper.js';


const  StartApp=asyncWrapper(async(app,port)=>{
  
            await connectToDB(process.env.MONGODB_LIVE_URL);
            app.listen(port, ()=>console.log(`your server is ready for fireworks on port:${port}`));
})
export{StartApp} 