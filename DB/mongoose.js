const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.listen(3470,()=>{console.log("http://localhost:3470/")})

app.get("/",(req,res)=>{
    res.send("hi mongoose");
})

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/lms").then
{
    console.log("The database LMS is connected");
}

const user1={
    name:{
        type : String,
    },
    email :{
        type : String,
    },
    password : {
        type : String,
    },
} ;

const ksk = mongoose.model("user",user1)
