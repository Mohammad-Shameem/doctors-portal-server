const express = require('express');
const app=express();
const cors = require('cors');
require('dotenv').config();
const port=process.env.PORT || 5000;


//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Doctors Portal Server Connected")
})
app.listen(port,()=>{
    console.log("Listneing to port",port)
})
