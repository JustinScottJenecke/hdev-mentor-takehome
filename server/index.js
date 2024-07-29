import express from "express";

const APP = express();

APP.get("/", (req, res) => {
    res.send('hello world')
})

APP.listen(3000);