const express = require('express');
const app = express();

app.use("/",(req,res)=>{
    res.send("Hello, Devtinder!");
})
app.use("/test",(req,res)=>{
    res.send("This is a test route.");
})

app.use("/about",(req,res)=>{
    res.send("About Devtinder: A platform to connect developers.");
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})