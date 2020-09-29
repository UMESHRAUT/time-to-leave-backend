const express=require('express')
const cors=require('cors')

const app=express();

const mongoose=require('mongoose');

const mailApi="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"

app.use(express.json())

mongoose.connect("mongodb+srv://Umesh123:Umesh123@cluster0.moi8u.mongodb.net/reminder?retryWrites=true&w=majority",()=>{
    console.log("mongo db connected");
});

app.use(cors());

app.get('/',(req,res)=>{
    res.json("working")
})

app.use('/send-mail',require('./reminder/api'))


app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("app is running");
})