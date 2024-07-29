import express from "express";
import cors from 'cors';

const APP = express();

// --- middleware registers ---

APP.use(cors());
APP.use(express.json());

// --- endpoints ---

APP.get("/", (req, res) => {
    res.send('hello world');
})

APP.post("/api/users/register", (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'});
});

APP.listen(8888, () => {
    console.log('started on port 8888');
});