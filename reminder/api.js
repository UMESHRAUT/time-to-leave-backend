const express=require('express');
const Reminder = require('./reminder_modules');
const router=express.Router();
const sgMail=require('@sendgrid/mail');

sgMail.setApiKey("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");

router.get('/',async(req,res)=>{
    const allReminder=await Reminder.find({});
    console.log(allReminder);
    res.json(allReminder);
})

router.post("/",async (req,res)=>{

    try {
     
    const {email,source,destination,time,sendAt}=req.body;

    const newReminder=new Reminder({
        source,
        destination,
        email,
        sendAt
    })


    
    console.log(req.body);

    const msg={
        text:"hurry up its time to leave",
        to:email,
        from:"rautumesh300@gmail.com",
        subject:"hurry up its time to leave",
        html:`<strong>its time to leave for ${destination} </strong>`,
        send_at:sendAt
    }

    const send= await sgMail.send(msg);
    const save=await newReminder.save();
    const allReminder=await Reminder.find({});
    console.log(allReminder);
    res.json(allReminder);
} catch (error) {
    console.log(error);
        res.json("error")
}
})

module.exports=router