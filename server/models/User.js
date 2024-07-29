import mongoose from "mongoose";

/**
 * Model entity for use in Mongoose ORM 
 */
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    collection: "user-data"
});

export default mongoose.model('UserData', UserSchema);