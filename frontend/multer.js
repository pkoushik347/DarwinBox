const express = require("express");

const app = express();

const multer = require("multer");

const upload = multer({ dest: "uploads/" }).single("demo_image");

app.get("/", (req, res) => {

 res.send("hello world");

});



app.post("/image", (req, res) => {

  

 upload(req, res, (err) => {

  if (err) {

   console.log(err);



   res.status(400).send("Something went wrong!");

  } else {

   res.send(req.file);

  }

 });

});



app.listen(3000, () => {

 console.log("Started on port 3000");

});

