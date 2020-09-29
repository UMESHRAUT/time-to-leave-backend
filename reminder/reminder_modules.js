const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const reminderSchema=new Schema({
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sendAt:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("Reminder",reminderSchema)