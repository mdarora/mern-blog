const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../db/models/User');

router.post("/register", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(401).json({error: "All fields are required."});
        }

        const findByUsername = await User.findOne({username});
        if(findByUsername){
            return res.status(401).json({error: "Username already exist."});
        }

        const findByEmail = await User.findOne({email});
        if(findByEmail){
            return res.status(401).json({error: "Email already exist."});
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPass});

        await newUser.save();
        return res.status(200).json({message: "User registered."});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});


module.exports = router;