// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Note = require("../models/Note")

// make ALL THE CRUD!!!!


module.exports = {
    // READ ALL
    findAll: (req, res) => {
        // use the model to execute a query
        Note.find()
            .then(allDaNotes => {
                console.log(allDaNotes);
                res.json(allDaNotes)
            })
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        console.log("req.body = ", req.body);
        Note.create(req.body)
            .then(newNote => {
                // res.json({message: "created", newNote, status: 200})
                res.json(newNote)
            })
            .catch(err => res.status(400).json(err));
    },

    // Read one
    findOne: (req, res) => {
        console.log(req.params.id);
        Note.findById(req.params.id)
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // Update
    update: (req, res) => {
        Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedNote => res.json({ updatedNote }))
            .catch(err => res.json(err));
    },

    // Delete
    delete: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.json(err));
    }
}