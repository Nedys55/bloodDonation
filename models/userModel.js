const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true}, 
    isAdmin: {type: Boolean, default: false} 
})

const User = model('User', userSchema);
module.exports = User
