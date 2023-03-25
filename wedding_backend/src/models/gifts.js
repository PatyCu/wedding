var mongoose = require('mongoose');

// Create the StartupSchema.
var GiftsSchema = new mongoose.Schema({
	itemTitle: {
	    type: String,
	    required: true
	},
	itemDescription: {
		type: String,
		required: true
	},
    itemValue: {
		type: Number,
		required: true
	},
    itemFunded: {
		type: Number,
		required: true
	},
    itemImg: {
		type: String,
		required: true
	},
});

// Export the model.
module.exports = mongoose.model('gifts', GiftsSchema);