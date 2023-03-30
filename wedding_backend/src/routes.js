const express = require("express");

//const api = require("./api.js");
const Gift = require("./models/gifts.js");

const app = express.Router();


app.post("/gifts/create-new-gift", async (request, response) => {
    const newGift = new Gift({...request.body});
    const insertedGift = await newGift.save();
    return response.status(200).json(insertedGift);
});

app.get("/gifts/get-all-gifts", async (request, response) => {
    const allGifts = await Gift.find({});
    return response.status(200).json(allGifts);
});

module.exports = app;