import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});

export default mongoose.model("Post", PostSchema);