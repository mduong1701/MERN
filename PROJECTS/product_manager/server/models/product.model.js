// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must have {PATH}"],
        minlength: [5, "provide at least 5 chars"]
    },
    price :{ 
        type: Number,
        required: [true, "must have {PATH}"]
    },
    description: {
        type: String,
        required: [true, "must have {PATH}"],
        minlength: [10, "provide at least 10 chars"]
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model("Product", ProductSchema)
// console.log(Ninja);

// export the model
module.exports = Product;