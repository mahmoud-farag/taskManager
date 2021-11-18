import expressAsyncHandler from "express-async-handler"
import { asyncWrapper } from "../medilwares/asyncWrapper.js";
import { customErrorHandlerFunc } from "../medilwares/customError.js";


import { Task} from "../models/TaskModel.js";

// /api/v1/tasks/  route controller
const getAllTasks = asyncWrapper(async(req, res,next)=>{

            const tasks= await Task.find({});
            if(!tasks){
                return next(customErrorHandlerFunc('no tasks found on this collection', 404));
                // return res.status(404).json('no tasks found on this collection')
            }
             res.status(200).json(tasks);
    
}); 


// /api/v1/tasks/  route controller
const postAllTasks = asyncWrapper(async(req, res,next)=>{

    if(!req.body){
        return next(customErrorHandlerFunc('plz Enter Data to be created', 404));

    }
     const task = new Task({
        name:req.body.name,
        completed: req.body.completed
    })
        const taskSaved = await task.save();
        res.status(200).json({message:"task Saved",taskSaved});  
})



// /api/v1/tasks/:id  route controller
const getSingleTask= asyncWrapper(async(req, res,next)=>{

        const {id:taskId} = req.params;
        const task = await Task.findById(taskId);
        // const task = await Task.findOne({_id:taskId}); // it aslo valid
        if(!task){
            return next(customErrorHandlerFunc(`no task found with ID:${taskId}`, 404));
            // return res.status(404).json('no task found on this collection')
        }
        res.status(200).json(task);
});

// /api/v1/tasks/  route controller
const updateSingleTask = asyncWrapper(async(req, res,next)=>{

        const {id:taskId} = req.params;
        if(!req.body){
            return next(customErrorHandlerFunc('plz Enter valid data To be updated', 501));
        }
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body,{
            new: true,
            runValidators:true
        })
        if(!task){
            return next(customErrorHandlerFunc(`there is no task with this ID:${taskId} to be updated`, 404));
        }
        res.status(200).json({_id: taskId, task});
}); 

const deleteSingleTask =expressAsyncHandler(async(req, res,next)=>{

    const {id:taskId} = req.params;
   
      const removedtask = await Task.findByIdAndRemove(taskId);
    //   const removedtask = await Task.findOneAndDelete({_id:taskId}) //it aslo valid;
      if(!removedtask){
        return next(customErrorHandlerFunc('there is no task to remove ', 404));
        // return res.status(404).json(`there is no task to remove with tihs ID: ${taskId}`);
    }
      res.status(200).json({message:"task removed", removedtask});
});

export {
    getAllTasks,
    postAllTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
}