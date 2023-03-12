const router = require('express').Router();
const User = require('../db/models/User');
const Post = require('../db/models/Post');

const loginAuth = require('../middlewares/loginAuth');


router.delete("/:id", loginAuth, async (req, res) => {
    try {
        if (req.Id !== req.params.id){
            return res.status(402).json({error: "You can delete only your own account."});
        }

        const findByid = await User.findOne({_id: req.params.id});

        if(!findByid){
            return res.status(402).json({error: "Invalid request."});
        }
        await Post.deleteMany({username: findByid.username});
        await findByid.delete();

        return res.status(200).json({message: "User deleted."});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});

router.put("/:id", loginAuth, async (req, res) => {
    try {
        if(req.id !== req.params.id){
            return res.status(402).json({error: "You can update only your own account."});
        }

        const {username, email, profilePic} = req.body;
        const findUserById = await User.findOne({_id: req.params.id});

        if(!findUserById){
            return res.status(402).json({error: "Invalid request."});
        }

         const updateUser = await findUserById.update({username, email, profilePic});

        if(!updateUser.acknowledged){
            return res.status(500).json({error: "Something went wrong", updateUser });
        }

        res.status(200).json({message: "User Updated"});

    } catch (error) {
        
    }
});

// TODO: create another route just to update user password.

router.get("/:id", async (req, res) => {
    try {
        if (!req.params.id){
            return res.status(402).json({error: "Invalid request."});
        }

        const getById = await User.findOne({_id: req.params.id}, {password: 0});

        if(!getById){
            return res.status(404).json({error: 'User not found.'});
        }

        return res.status(200).json({message: "User found.", User : getById});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});


module.exports = router;