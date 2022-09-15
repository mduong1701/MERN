// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Author = require("../models/Author")
// make ALL THE CRUD!!!!
module.exports = {
    // READ ALL
    findAll: (req, res) => {
        // use the model to execute a query
        Author.find()
            .then(allAuthors => {
                res.json(allAuthors)
            })
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                res.json({message: "created", newAuthor, status: 200})
            })
            .catch(err => res.status(400).json(err));
    },

    // Read one
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // Update
    update: (req, res) => {
        Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => res.json({message: "created", updatedAuthor, status: 200}))
            .catch(err => res.status(400).json(err));
    },

    // Delete
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.json(err));
    }
}