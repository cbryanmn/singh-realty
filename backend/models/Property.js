const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: String,
    address: String,
    citystatezip: String,
    zipCode: String,
    unit: String,
    groundFloor: Boolean,
    bedrooms: Number,
    bathrooms: Number,
    sqft: Number,
    unitType: String,
    rent: Number,
    deposit: Number,
    availableOn: Date,
    amenities: [String],
    description: String,
    img: String,
    alt: String
});

module.exports = mongoose.model('Property', propertySchema);
