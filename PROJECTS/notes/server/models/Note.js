// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 5 chars long"]
    },
    content :{ 
        type: String,
        required: [true, "{PATH} must be present"]
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Note = mongoose.model("Note", NoteSchema)
// console.log(Ninja);

// export the model
module.exports = Note;