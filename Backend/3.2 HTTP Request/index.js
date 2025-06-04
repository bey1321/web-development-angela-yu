import express from "express";

const app = express();
const port = 4000;

//req - request
//res - response
app.get("/", (req,res) =>{
    res.send("<h1>Hello <span>World</span></h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1>about World</h1>");
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact me</h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})