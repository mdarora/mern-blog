const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const User = require('../db/models/User');

const loginAuth = require('../middlewares/loginAuth');

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

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(401).json({error: "All fields are required."});
        }

        const findByUsername = await User.findOne({username});
        if(!findByUsername){
            return res.status(401).json({error: "Invalid details!"});
        }

        const matchPass = await bcrypt.compare(password, findByUsername.password);
        if(!matchPass){
            return res.status(401).json({error: "Invalid details!"});
        }

        const token = jwt.sign({id: findByUsername._id, username: findByUsername.username}, process.env.SECRET_KEY);

        res.cookie("token", token);
        res.status(200).json({message: "User loggedin.", user: findByUsername});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});

router.get("/login", loginAuth, (req, res) => {
    res.status(200).json({id: req.id, username: req.username});
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({message: "User logged out."});
});

module.exports = router;