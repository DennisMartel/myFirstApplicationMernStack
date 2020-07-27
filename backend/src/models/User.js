const { Schema, model} = require('mongoose');

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    } 
}, {
    timestamps:true
});

module.exports = model('User', usersSchema);