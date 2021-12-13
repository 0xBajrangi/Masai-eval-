const { Schema, model } = require('mongoose');

const theaterSchema = new Schema({
    name: { type: String, required: true },
    location: { type: email, required: true },

}, {
    versionKey:false
});

module.exports = model("theater", theaterSchema);