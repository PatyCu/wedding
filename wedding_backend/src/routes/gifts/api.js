const GiftModel = require("../../models/gifts.js");

module.exports = {
    //api.createNewGift(request.body.itemTitle, request.body.itemDescription, request.body.itemValue, request.body.itemFunded, request.body.itemFundUnconfirmed, request.body.itemImg,
    createNewGift: function(itemTitle, itemDescription, itemValue, itemFunded, itemFundUnconfirmed, itemImg) {
        console.log("TEST")
        const newGift = new GiftModel({
            itemTitle: itemTitle,
            itemDescription: itemDescription,
            itemValue: itemValue,
            itemFunded: itemFunded, 
            itemFundUnconfirmed: itemFundUnconfirmed, 
            itemImg: itemImg
        });
        /*
        newGift.save(function(error, newItem) {
            console.log(newItem);
            if (error) {
                console.log("ERROR: Was not able to complete the save operation");
            } 
        });
        */ 
       newGift.save();
    }
}

/*
curl -X POST -H  "Content-Type: application/json" -d '{"itemTitle": "Spa a Rotorua","itemDescription": "itemDescription", "itemValue": "300", "itemFunded": "0", "itemFundUnconfirmed": "300", "itemImg": "./url/img.jpg"}' http://localhost:5005/gifts/create-new-gift
curl -X POST -H  "Content-Type: application/json" -d '{"name": "Tacos", "calories": 200, "description": "Beef and cheese in a tortilla."}' http://localhost:5000/gifts/create-new-gift
*/