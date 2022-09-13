// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "The input is required."],
        minlength: [10, "The input must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "The input is required."],
        minlength: [3, "The input must be at least 3 characters long"]
    },
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Joke = mongoose.model("Joke", JokeSchema)
// console.log(Ninja);

// export the model
module.exports = Joke;