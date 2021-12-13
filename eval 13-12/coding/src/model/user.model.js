const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: email, required: true },
    password: { type: password, required: true },
    profile_photo_url: { type: string, required: true },
    role:[{ type: String, required: true}]
}, {
    versionKey:false
});

module.exports = model("user", userSchema);