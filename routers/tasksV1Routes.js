import express from 'express';
import { deleteSingleTask,
         getAllTasks, 
         getSingleTask, 
         postAllTasks, 
         updateSingleTask } from '../controllers/tasksV1Contollers.js';

const tasksV1Router = express.Router();


tasksV1Router.route('/').get(getAllTasks).post(postAllTasks)
tasksV1Router.route('/:id').get(getSingleTask)
                           .patch(updateSingleTask)
                           .delete(deleteSingleTask)


export default tasksV1Router;