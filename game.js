const express = require("express");
const game = express();
const path = require("path");

game.use("/static" , express.static("static"));
game.set("view engine" , "pug");
game.set("views" , path.join(__dirname , "views"));

game.get("/" , (req , res)=>{
res.status(200);
res.render("index.pug");  
})

game.get("/game" , (req , res)=>{
    res.status(201);
    res.render("game.pug");
})

game.listen(8080 , ()=>{
    console.log("Started Game");
})