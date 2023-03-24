const express = require("express");

const app = express();

const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "./images")
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname)
        }
    })
})

app.post("/single", upload.single("upload"), (req, res) => {
    console.log(req.file);
    res.send("Testing123")
})