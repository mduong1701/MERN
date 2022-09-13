// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Product = require("../models/product.model")

// make ALL THE CRUD!!!!

// READ ALL
module.exports.findAll = (req, res) => {
    // use the model to execute a query
    Product.find()
        .then(allDaProducts => {
            // IMPORTANT what we return here is what we will receive in REACT!
        //    res.json({ninjas: allDaNinjas, status: "ok"}) // []
           res.json(allDaProducts) // []
        })
        .catch(err => res.json({message: "something went wrong", serverError: err}))
}

module.exports.create = (req, res) => {
    console.log("req.body = ", req.body);
    // db.ninjas.insertOne({name:"", numberOfBelts: 4, isGraduating: true})
    // const {name, numberOfBelts, isGraduating} = req.body;
    // Ninja.create({
    //         name,
    //         numberOfBelts,
    //         isGraduating,
    // })
    Product.create(req.body)
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOne= (req, res) => {
    console.log(req.params.id);
    Product.findOne({ _id: req.params.id })
        .then(one => res.json({one }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.update = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json({ updated}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}