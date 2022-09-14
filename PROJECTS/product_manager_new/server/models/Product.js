// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 5 chars long"]
    },
    price :{ 
        type: Number,
        required: [true, "{PATH} must be present"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"]
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model("Note", ProductSchema)
// console.log(Ninja);

// export the model
module.exports = Product;