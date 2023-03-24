const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const p = {
    category : {
        cat:{
            type : String,
        },
        subcat : {
            name :{
                type : String,
            },
            price : {
                type : Number,
            },
        },
    },
}

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/DarwinBox2").then(
    console.log("DB connected")
)
const mdl = mongoose.model("product-ab",p);
const pro = new mdl({
    category : {
        cat : "Fruits",
        subcat : {
            name : "Apple",
            price : 120,
        },
    },
})
pro.save();