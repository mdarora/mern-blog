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

// TODO: create a route to update post (53:19)

router.delete("/:id", loginAuth, async (req, res) => {
    try {
        const findPostById = await Post.findOne({_id: req.params.id});

        if(!findPostById){
            return res.status(402).json({error: "Invalid request."});
        } else if (findPostById.userId !== req.id){
            return res.status(401).json({error: "You can only delete your own post only!"});
        }
        await findPostById.delete();

        res.status(200).json({message: "Post deleted."});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const findPostById = await Post.findOne({_id: req.params.id});
        if(!findPostById){
            return res.status(404).json({error: "Post not found."});
        }

        res.status(200).json({message: "Post found", post: findPostById});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});

module.exports = router;