const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    image:  {
        type: String,
        default: "defaultPostImage.jpeg"
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    categories: {
        type: Array
    }
}, {timestamps: true});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;