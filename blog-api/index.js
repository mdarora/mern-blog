const express = require('express');
const app = express();

require('dotenv').config();

app.get("/", (req, res)=> {
    res.json({message: "home route of server"});
});

app.use(express.json());
app.use(require('cookie-parser')());

app.use("/api/auth", require('./routes/auth'));
app.use("/api/users", require('./routes/users'));
app.use("/api/posts", require('./routes/posts'));


require('./db/dbConnection');
app.listen(process.env.PORT, ()=>{
   console.log("server is listening to port :", process.env.PORT);
});