const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')

require('dotenv').config();

app.get("/", (req, res)=> {
    res.json({message: "home route of server"});
});

app.use(express.json());
app.use(require('cookie-parser')());
app.use('/images', express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/");
    },
    filename: (req, file, cb ) =>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json({message: "Image uploaded."});
});


// api routes
app.use("/api/auth", require('./routes/auth'));
app.use("/api/users", require('./routes/users'));
app.use("/api/posts", require('./routes/posts'));
app.use("/api/categories", require('./routes/categories'));


require('./db/dbConnection');
app.listen(process.env.PORT, ()=>{
   console.log("server is listening to port :", process.env.PORT);
});