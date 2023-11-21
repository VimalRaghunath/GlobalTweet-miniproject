const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    username: String,
    password: String,
    id: String,
    bio: String,
    avatar : String,
    following: Array,
    followers: Array,
    isBlocked: { type: Boolean , default:false},
})

module.exports = mongoose.model("User",userSchema)