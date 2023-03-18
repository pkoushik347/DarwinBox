const express = require('express')
  
const app = express()
  
// Using express.urlencoded middleware

  
// Handling Post request
app.post('/',function(req,res){
    console.log("hi");
    // Can access all parameters from req.body
    console.log('POST parameter received are: ',req.body)
    res.redirect('/')
})
  
// Get request 
app.get('/',function(req,res){
      console.log("hiiii");
    // Sent index.html file to the client
    res.sendFile(__dirname+'/index2.html')
})
  
// Creating server at port 3000
app.listen(3007,function(req,res){
    console.log('started listening at server 3007')
})