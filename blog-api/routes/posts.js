const router = require('express').Router();
const User = require('../db/models/User');
const Post = require('../db/models/Post');

const loginAuth = require('../middlewares/loginAuth');

router.post("/", loginAuth, async (req, res) => {
    const {title, desc} = req.body;
    try {
        if (!title, !desc) {
            return res.status(401).json({error: "All field are required."});
        }

        const findByTitle = await Post.findOne({title});
        if(findByTitle){
            return res.status(402).json({error: "Title already exist. Try another one."});
        }

        const newPost = new Post({...req.body, username: req.username, userId: req.id});

        await newPost.save();

        return res.status(200).json({message: "Post created.", post: newPost});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});


module.exports = router;