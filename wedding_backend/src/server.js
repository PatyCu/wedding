const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;
app.use(helmet())
//app.use(cors());
//To-Do replace the domain.dom example value with my own domain
app.use(cors({
  origin: process.env.NODE_ENV === "development" ? "*" : /domain\.com$/
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());

//mongoose.connect('mongodb://localhost/my-database', {
mongoose.connect('mongodb+srv://patycuenca:hBVP1ybxZDwBhU7J@cluster0.dl3atgi.mongodb.net/?retryWrites=true&w=majority', {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});