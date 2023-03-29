var mongoose = require('mongoose');

// Create the StartupSchema.
var GiftsSchema = new mongoose.Schema({
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
		required: false
	},
});

// Export the model.
module.exports = mongoose.model('Gifts', GiftsSchema);