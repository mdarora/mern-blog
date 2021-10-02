const express = require('express');
const app = express();

require('dotenv').config();

app.get("/", (req, res)=> {
    res.json({message: "home route of server"});
});


require('./db/dbConnection');
app.listen(process.env.PORT, ()=>{
   console.log("server is listening to port :", process.env.PORT);
});