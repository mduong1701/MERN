// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have {PATH}"],
        minlength: [3, "provide at least 3 chars"]
    },
    age :{ 
        type: Number,
        required: true
    },
    eyeColor: {
        type: String,
        default: "black"
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Pet = mongoose.model("Pet", PetSchema)
// console.log(Ninja);

// export the model
module.exports = Pet;