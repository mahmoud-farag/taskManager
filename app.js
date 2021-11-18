import express from 'express';
import dotEnv from 'dotenv';


import tasksV1Router from './routers/tasksV1Routes.js';
import { notFound } from './medilwares/notFuond.js';
import { errorHandler } from './medilwares/errorHandelerMiddleWare.js';
import { StartApp } from './medilwares/startApp.js';

dotEnv.config();
const  app = express(),
       PORT = process.env.PORT || 5000;


app.use(express.static('./public'))
app.use(express.json());
    
app.use('/api/v1/tasks',tasksV1Router)

// handle not exist routes
app.use(notFound);

// error handlers >>> route
app.use(errorHandler)


// initialize the app and the DB connection. on a specific port 
 StartApp (app,PORT)


