import express from "express";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Middleware to serve static files
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.render("index");
});

// Route for /essays (changed from POST to GET)
app.get("/essays", (req, res) => {
    res.render("indexss"); // Make sure indexss.ejs exists in the views folder
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
