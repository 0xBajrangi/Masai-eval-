const { Schema, model } = require('mongoose');

const screenSchema = new Schema({
    name: { type: String, required: true },
    theater: { 
        type: Schema.Types.objectId,
        ref: "theater", 
        required: true
   }
}, {
    versionKey:false
});

module.exports = model("screen", screenSchema);