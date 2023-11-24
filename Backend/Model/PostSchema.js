const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({

   
    title:String,
    description: String,
    image: String,
    category: String,
    likes: String,
    userId:{type:mongoose.Schema.ObjectId, ref:"User"}
})

module.exports = mongoose.model("Post",PostSchema)