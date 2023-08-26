import express from "express";
const app = express();
const port = 3000;
app.get('/get',(req,res)=>{
    res.send('<h1>Auto Scaling Demo App </h1> <h4>Message: Success</h4> <p> Version: 1.0.0 </P>');
})

app.listen(port,(err)=>{
    if(err) {
        console.log(`Error ${err}`);
    }else {
        console.log(`Demo app up and listenting port ${port}`);
    }
})