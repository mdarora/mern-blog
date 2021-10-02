const router = require('express').Router();
const User = require('../db/models/User');

router.post("/register", async (req, res) => {
    const {username, email, password} = req.body;
    try {
        if(!username || !email || !password){
            return res.status(401).json({error: "All fields are required"});
        }
        const newUser = new User({username, email, password});

        await newUser.save();
        return res.status(200).json({message: "User registered"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});


module.exports = router;