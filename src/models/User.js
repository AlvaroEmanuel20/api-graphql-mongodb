import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: String,
    active: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("User", UserSchema);