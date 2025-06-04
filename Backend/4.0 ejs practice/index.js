import express from 'express';

const app = express();
const port = 3000;

const date = new Date();
const day = date.getDay();

app.get("/", (req, res) =>{
    res.render('index.ejs', {
        today: "weekend",
        advice: "enjoy your life"
    })
})

app.listen(port, () =>{
    console.log(`Listening to port ${port}`);
}
)