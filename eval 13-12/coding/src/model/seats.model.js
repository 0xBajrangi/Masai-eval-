const { Schema, model } = require('mongoose');

const seatSchema = new Schema({
   
    show: { 
        type: Schema.Types.objectId,
        ref: "show", 
        required: true
   }
}, {
    versionKey:false
});

module.exports = model("seat", seatSchema);