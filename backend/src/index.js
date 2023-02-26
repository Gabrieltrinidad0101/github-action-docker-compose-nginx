const express = require('express');
const app = express();
const cors = require('cors');
const User = require("./model");
const morgan = require('morgan');
require("./database");

app.use(cors({
    origin: "*"
}));
app.use(morgan("dev"))
app.use(express.json())
app.post("/add",async (req,res)=>{
    try{
        const {name} = req.body;
        const newUser = new User({name})
        await newUser.save();
        res.status(200).json({message: "ok"})
    }catch(e){
        console.log(e);
        res.status(500).json({message: e})
    }
})

app.get("/get",async (req,res)=>{
    try{
        const listUser = await User.find();
        res.status(200).json({list: listUser})
    }catch(e){
        console.log(e);
        res.status(500).json({message: e})
    }
})

app.listen(3001,_=>{
    console.log("Start the server listening on port 3001")
})