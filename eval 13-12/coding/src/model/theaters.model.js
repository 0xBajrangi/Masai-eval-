const { Schema, model } = require('mongoose');

const theaterSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },

}, {
    versionKey:false
});

module.exports = model("theaters", theaterSchema);
