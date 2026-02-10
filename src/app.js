const express = require('express');
const app = express();



app.use("/user",(req,res,next)=>{
    console.log("Middleware for /user route");
    next();
},
(req,res)=>{
    res.send("User route");
}
);

app.get("/user/:userId/:userName",(req,res)=>{
    console.log(req.params);
    res.send("User route");
});

app.post("/user",(req,res)=>{
    res.send("User created");
});




app.use("/test",(req,res)=>{
    res.send("This is a test route.");
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})