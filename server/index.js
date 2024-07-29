import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import UserSchema from "./models/User.js";
// import userModel from "./models/User.js";

const APP = express();

// --- middleware registers ---

APP.use(cors());
APP.use(express.json());

mongoose.connect('mongodb://localhost:27017/hdev-mentor-takehome');

// --- endpoints ---

APP.get("/", (req, res) => {
    res.send('hello world');
})

// Create 
APP.post("/api/users/register", async (req, res) => {
    // console.log(req.body);
    const newUserDto = {username: req.body.name, email: req.body.email,password: req.body.password};

    try {
        const user = await UserSchema.create(newUserDto);
        res.send(user);
        res.json({status: 'ok'});            
    
    } catch (error) {
        res.json({status: 'error'});    
    }
});

// Read by through DTO
APP.post("/api/users/login", async (req, res) => {

    const loginUserDto = {username: req.body.name, password: req.body.password};
    const user = await UserSchema.findOne(loginUserDto);

    return user ? res.json({status:'ok', user: true}) : res.json({status: 'error', user: false});           

});

APP.listen(8888, () => {
    console.log('started on port 8888');
});