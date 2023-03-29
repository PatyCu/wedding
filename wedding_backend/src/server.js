const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5005;


const app = express();

//const mongoString = "mongodb+srv://patycuenca:hBVP1ybxZDwBhU7J@cluster0.dl3atgi.mongodb.net/?retryWrites=true&w=majority";
const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mcluster0.dl3atgi.mongodb.net/WeddingRegistry?retryWrites=true&w=majority`

mongoose.connect(mongoString);

mongoose.connection.on("error", function(error) {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }
});

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.");
});

app.use(helmet());

app.use(cors({
  origin: process.env.NODE_ENV === "development" ? "*" : /domain\.com$/
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/gifts/index.js"));

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`);
})