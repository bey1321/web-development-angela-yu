
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import  {fileURLToPath} from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.use(bodyParser.urlencoded({extended: true}))

app.post("/check", (req, res) => {
    const correctPassword = "ILoveProgramming"; // Define the correct password
    const userPassword = req.body.password; // Get the submitted password from the form

    if (userPassword === correctPassword) {
        // If the password is correct, send the secret.html file
        res.sendFile(__dirname + "/public/secret.html");
    } 
    else {
        // If the password is incorrect, send an error response or redirect
        res.send("Incorrect password. Please try again.");
    }
});

