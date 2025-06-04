import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const totalLength = req.body["fName"].length + req.body["lName"].length;
  console.log(req)
  console.log(req.body);
  console.log(req.body["fName"]);  
  console.log(req.body["lName"]);

  res.render("index.ejs",{
    numberOfLetters : totalLength
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
