// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Product = require("../models/Product")

// make ALL THE CRUD!!!!


module.exports = {
    // READ ALL
    findAll: (req, res) => {
        // use the model to execute a query
        Product.find()
            .then(allProducts => {
                console.log(allProducts);
                res.json(allProducts)
            })
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        console.log("req.body = ", req.body);
        Product.create(req.body)
            .then(newProduct => {
                // res.json({message: "created", newNote, status: 200})
                res.json(newProduct)
            })
            .catch(err => res.json(err));
    },

    // Read one
    findOne: (req, res) => {
        console.log(req.params.id);
        Product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // Update
    update: (req, res) => {
        Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json({ updatedProduct }))
            .catch(err => res.json(err));
    },

    // Delete
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.json(err));
    }
}