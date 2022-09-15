// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"],
        minlength: [3, "{PATH} must be at least 3 chars long (From Server)"]
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Author = mongoose.model("Author", AuthorSchema)

// export the model
module.exports = Author;