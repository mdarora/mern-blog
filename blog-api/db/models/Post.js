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
    image:  String,
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array
    }
}, {timestamps: true});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;