// import express from "express";
// const APP = express();

// APP.use(express.json());

// /**
//  * Application middleware to validate whether a RegisterUserDto username 
//  * contains any inappropriate words.
//  * @param {*} req - request object
//  * @param {*} res - response object
//  * @param {*} next - next middleware in stack
//  */
// const usernameValidator = (req, res, next) => {

//     const inappropriateWords = [
//         "toy","blind","melon","butt","clown",
//         "head","gum","ball","smashing","pumpkin"
//     ];

//     inappropriateWords.forEach(word => {
//         if(req.body.name.includes(word))
//             res.status(400).json({error: "use of inappropriate word in username."})
//         else
//             next();
//     });
// }

// export default usernameValidator;