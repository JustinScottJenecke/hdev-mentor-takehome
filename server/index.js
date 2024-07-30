import express from "express";
import cors from 'cors';
import mongoose, { Error } from "mongoose";
import UserSchema from "./models/User.js";
import jwt from "jsonwebtoken";
import usernameValidator from "./middleware/username-validator.js";
// import userModel from "./models/User.js";

const APP = express();

// --- middleware registers ---

APP.use(cors());
APP.use(express.json());

mongoose.connect('mongodb://localhost:27017/hdev-mentor-takehome');


// --- endpoint actions ---

APP.get("/", (req, res) => {
    res.send('hello world');
})

// Create 
APP.post("/api/users/register", usernameValidator, async (req, res) => {

    console.log(req.body);
    const RegisterUserDto = {name: req.body.name, email: req.body.email, password: req.body.password};

    try {
        const user = await UserSchema.create(RegisterUserDto);
        // res.send(user);
        res.status(201).json(user);            
    
    } catch (err) {
        console.error(err);
        res.status(400).json({err, message: err.errmsg});    
    }
});

// Read by through DTO
APP.post("/api/users/login", async (req, res) => {

    const loginUserDto = {name: req.body.name, password: req.body.password};
    const user = await UserSchema.findOne(loginUserDto);

    if(user) {

        const authToken = jwt.sign({
            name: user.name,
            email: user.email,
            // password: user.password - security risk
        }, 'mock-secret');

        res.status(200).json({msg: 'success', auth: authToken})

    } else {
        console.error('user not found.');
        console.error(user);
        res.status(400).json({msg: "authentication error..", auth: null});           
    }
});


// --- run

APP.listen(8888, () => {
    console.log('started on port 8888');
});
