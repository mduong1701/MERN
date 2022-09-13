// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Pet = require("../models/pet.model")

// make ALL THE CRUD!!!!

// READ ALL
module.exports.findAll = (req, res) => {
    // use the model to execute a query
    Pet.find()
        .then(allDaPets => {
            // IMPORTANT what we return here is what we will receive in REACT!
        //    res.json({ninjas: allDaNinjas, status: "ok"}) // []
           res.json(allDaPets) // []
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
    Pet.create(req.body)
        .then(newPet => res.json({ newPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOne= (req, res) => {
    console.log(req.params.id);
    Pet.findOne({ _id: req.params.id })
        .then(one => res.json({one }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.update = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json({ updated}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.delete = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}