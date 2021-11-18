import mongoose from 'mongoose';

const {Schema} = mongoose;

const taskSchema = new Schema({
    name:{
        type:String, 
        required:[true,'you must provide a name for this task'],
        maxlength:[30,'the name must be less than 16 character'],
        trim:true
        },
    completed:{
        type:Boolean,
        default:false }
},{
    timestamps:true
});

const Task = mongoose.model('Task', taskSchema);

export { Task};