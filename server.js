const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const PORT = 3000;


app.get("/",(req, res)=>{
    res.send("Welcome to Pokemon APP!!!");
})

app.get("/pokemon", (req,res)=>{
    res.send(pokemon);
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`);

})
