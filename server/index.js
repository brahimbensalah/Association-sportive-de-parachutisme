const express = require("express");
const userRoutes = require('./routes/user.routes')
const mongoose=require("mongoose");
const app = express();


// const db = require('./database-mysql');


const PORT = process.env.PORT || 5000
var url='mongodb://localhost:27017/test'

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api/user",userRoutes);



app.get("/",(req,res)=>{
  mongoose.connect(url).then(res=>{
    console.log("Connected to MongoDB")
    // res.send("Hello World!")
  })
});


app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
