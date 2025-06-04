import express from 'express';

const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    let date = new Date();
    let day = date.getDay();
    let dayTypes;
    let advices;

    if(day === 0 || day === 6){
        dayTypes = "weekend";
        advices = "sit back, relax, and enjoy the show"
    }
    else{
        dayTypes = "weekday";
        advices = "work hard"
    }
    res.render("index.ejs", {
        dayType: dayTypes,
        advice: advices
    });
})

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});