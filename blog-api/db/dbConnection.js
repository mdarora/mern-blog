const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    // useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    console.log("Database connected.");
}).catch((err)=> {
    console.log("Database connection failed! ", err);
});