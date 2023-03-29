const express = require("express");

const api = require("./api.js");

const app = express.Router();

/*
    itemTitle: {
	    type: String,
	    required: true
	},
	itemDescription: {
		type: String,
		required: false
	},
    itemValue: {
		type: Number,
		required: true
	},
    itemFunded: {
		type: Number,
		required: true
	},
    itemFundUnconfirmed: {
        type: Number,
        required: false
    },
    itemImg: {
		type: String,
		required: true
	},
*/

app.post("/gifts/create-new-gift", function(request, response) {
  if (!request.body.itemTitle || !request.body.itemValue || !request.body.itemFunded) {
    console.log("falten valors obligatoris: ",request);
    response.json({error: true})
  } else {
    api.createNewGift(request.body.itemTitle, request.body.itemDescription, request.body.itemValue, request.body.itemFunded, request.body.itemFundUnconfirmed, request.body.itemImg);
    response.json({error: false});
  }
})

module.exports = app;