

// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const NinjaSchema = new mongoose.Schema({
    name: String,
    numberOfBelts: Number,
    isGraduating: Boolean
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Ninja = mongoose.model("Ninja", NinjaSchema)
// console.log(Ninja);

// export the model
module.exports = Ninja;