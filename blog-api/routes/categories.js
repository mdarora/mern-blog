const router = require('express').Router();
const Category = require('../db/models/Category');


// Route to create a new category
router.post('/', async (req, res) =>{
    const {name} = req.body;
    
    if(!name){
        return res.status(402).json({error: "Category name is required"});
    }

    try {
        const newCat = new Category({name});
        const savedCat = await newCat.save();

        res.status(200).json({message: "Category created", cat: savedCat});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});


//Route to get all categories
router.get("/", async (req, res) =>{
    try {
        const cats = await Category.find();

        if (!cats.length){
            return res.status(404).json({error: "No category found"});
        }

        res.status(200).json({message: "categories found", cats});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "Something went Wrong!"});
    }
});

module.exports = router;