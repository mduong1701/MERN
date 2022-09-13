// -- CONTROLLER --
// making queries to the DB
// using the model
// so, we have to import the model
const Joke = require("../models/joke.model")

// make ALL THE CRUD!!!!

// READ ALL
module.exports.findAllJokes = (req, res) => {
    // use the model to execute a query
    Joke.find()
        .then(allDaJokes => {
            // IMPORTANT what we return here is what we will receive in REACT!
            //    res.json({ninjas: allDaNinjas, status: "ok"}) // []
            res.json(allDaJokes) // []
        })
        .catch(err => res.json({ message: "something went wrong", serverError: err }))
}

module.exports.createJoke = (req, res) => {
    console.log("req.body = ", req.body);
    // db.ninjas.insertOne({name:"", numberOfBelts: 4, isGraduating: true})
    // const {name, numberOfBelts, isGraduating} = req.body;
    // Ninja.create({
    //         name,
    //         numberOfBelts,
    //         isGraduating,
    // })
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ ninja: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(theJoke => res.json({ joke: theJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneRandomJoke = (req, res) => {
    Joke.find()
        .then(allDaJokes => {
            let i = Math.floor(Math.random() * allDaJokes.length);
            res.json(allDaJokes[i]);
        })
        .catch(err => res.json({ message: "something went wrong", serverError: err }))

}


module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}