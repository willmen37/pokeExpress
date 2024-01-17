const express = require("express");

const app = express();
const PORT = 3000;

app.get("/",(req, res)=>{
    res.send("Welcome to Pokemon APP!!!")
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`)

})
