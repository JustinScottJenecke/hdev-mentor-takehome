/**
 * Request middleware for validating whether a username by checking wheher it contains
 * any inappropriate words or not. Returns a feedback flag to client so client knows error message
 * can be used as feedback to client
 * 
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next middleware to be called
 * @returns 
 */
const usernameValidator = (req, res, next) => {

    let valid = true;

    const inappropriateWords = [
        "toy", "blind", "melon", "butt", "clown", "head", "gum", "ball", "smashing", "pumpkin"
    ];

    inappropriateWords.forEach(word => {
        if (req.body.name.includes(word)) {
            valid = false;
            return;
        }
    })

    if (valid) {
        next();
        return;
    }

    console.error("use of inappropriate word in username.");
    res.status(400).json({ error: "use of inappropriate word in username.", feedback: true });
}

export default usernameValidator;