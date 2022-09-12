// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Ninja = require("../models/ninja.model")

// make ALL THE CRUD!!!!

// READ ALL
module.exports.findAllNinjas = (req, res) => {
    // use the model to execute a query
    Ninja.find()
        .then(allDaNinjas => {
            // IMPORTANT what we return here is what we will receive in REACT!
        //    res.json({ninjas: allDaNinjas, status: "ok"}) // []
           res.json(allDaNinjas) // []
        })
        .catch(err => res.json({message: "something went wrong", serverError: err}))
}

module.exports.createNinja = (req, res) => {
    console.log("req.body = ", req.body);
    // db.ninjas.insertOne({name:"", numberOfBelts: 4, isGraduating: true})
    // const {name, numberOfBelts, isGraduating} = req.body;
    // Ninja.create({
    //         name,
    //         numberOfBelts,
    //         isGraduating,
    // })
    Ninja.create(req.body)
        .then(newlyCreatedNinja => res.json({ ninja: newlyCreatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.bob })
        .then(theNinja => res.json({ ninja: theNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.updateExistingNinja = (req, res) => {
    Ninja.findOneAndUpdate({ _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNinja => res.json({ ninja: updatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}